"use client";
import { useState, useEffect } from "react";
import Papa from "papaparse";

const JOBS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1LXzKYZN9w2oEcAYHcmonYuGR42oSjE-CaLeIaEy-mSzTkPkw7pjw-ivMijwiLFMGSjz5rFFRDpiu/pub?output=csv";

export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  country: string;
  experience: string;
  employmentType: string;
  postedDate: string;
  validThrough: string;
  status: string;
  description: string;
}

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Papa.parse(JOBS_CSV_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const today = new Date();
        const parsed: Job[] = (results.data as any[])
          .map((row) => ({
            id: (row["Job ID"] || row["ID"] || row["id"] || "").toString().trim(),
            slug: (row["slug"] || row["Slug"] || "").toString().trim(),
            title: (row["Title"] || row["title"] || "").toString().trim(),
            location: (row["Location"] || row["location"] || "").toString().trim(),
            city: (row["city"] || row["City"] || row["Location"] || "").toString().trim(),
            country: (row["country"] || row["Country"] || "IN").toString().trim(),
            experience: (row["Experience"] || row["experience"] || "").toString().trim(),
            employmentType: (row["employment_type"] || "FULL_TIME").toString().trim(),
            postedDate: (row["posted_date"] || new Date().toISOString().split("T")[0]).toString().trim(),
            validThrough: (row["valid_through"] || "").toString().trim(),
            status: (row["Status"] || row["status"] || "").toString().trim(),
            description: (row["Job Description"] || row["Description"] || row["description"] || "").toString(),
          }))
          .filter((job) => {
            if (!job.id || !job.slug) return false;
            if (job.status.toLowerCase() !== "active") return false;
            if (
              job.validThrough &&
              !isNaN(new Date(job.validThrough).getTime()) &&
              new Date(job.validThrough) < today
            ) return false;
            return true;
          });

        setJobs(parsed);
        setIsLoading(false);
      },
      error: (err) => {
        console.error("Error parsing jobs CSV:", err);
        setIsLoading(false);
      },
    });
  }, []);

  return { jobs, isLoading };
}