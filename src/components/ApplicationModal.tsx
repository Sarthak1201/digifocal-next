"use client";
import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import type { Job } from "@/hooks/useJobs";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedJob: Job | null;
}

export function ApplicationModal({ isOpen, onClose, selectedJob }: Props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState("");

  const handleFileValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File is too large. Max 5MB.");
        e.target.value = "";
      } else {
        setError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: formData,
      });
      setShowSuccessMessage(true);
    } catch (err) {
      setError("Failed to submit. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setShowSuccessMessage(false);
      setError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            
            <div className="p-6 border-b border-white/5 flex justify-between items-center shrink-0 bg-[#141414] z-10">
              <h2 className="text-2xl font-semibold text-white tracking-tight">
                {showSuccessMessage
                  ? "Application Received"
                  : selectedJob
                    ? `Applying for: ${selectedJob.title}`
                    : "Submit Your Profile"}
              </h2>
              <button onClick={handleClose} className="text-gray-500 hover:text-white transition-colors cursor-pointer">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div
              className="p-8 overflow-y-auto flex-1 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full"
              style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.1) transparent" }}
            >
              {showSuccessMessage ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
                  <p className="text-gray-400 max-w-sm mb-8">
                    Your resume has been successfully submitted to our system.
                  </p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-[#AB784A] hover:bg-[#976436] text-white font-medium rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form
                  action="https://hook.eu1.make.com/cjawv5iqonxjum475bts8d90sw7obbc2"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <input type="hidden" name="applied_job_id" value={selectedJob?.id || "General Talent Pool"} />
                  <input type="hidden" name="applied_job_title" value={selectedJob?.title || "General Application"} />
                  <input type="hidden" name="source_url" value={typeof window !== "undefined" ? window.location.href : ""} />

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="job_title"
                      required
                      defaultValue={selectedJob?.title || ""}
                      placeholder="e.g. Senior React Developer"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Skills <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="skills" required placeholder="e.g. React, Node.js"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="experience" required placeholder="e.g. 3 Years"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text" name="location" required placeholder="e.g. Mumbai"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email" name="email" required placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Job Category <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="Job_Category"
                          value="IT"
                          required
                          className="w-4 h-4 accent-[#AB784A] bg-[#141414] border-white/10 focus:ring-[#AB784A] cursor-pointer"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">IT</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="Job_Category"
                          value="Non-IT"
                          required
                          className="w-4 h-4 accent-[#AB784A] bg-[#141414] border-white/10 focus:ring-[#AB784A] cursor-pointer"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">Non IT</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Upload Resume/CV <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file" name="attachment" accept=".pdf,.doc,.docx" required
                        onChange={handleFileValidation}
                        className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#AB784A] file:text-white hover:file:bg-[#976436] cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF or Word document (Max 5MB)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message" rows={3}
                      className="w-full px-4 py-3 bg-[#141414] border border-white/10 rounded focus:outline-none focus:border-[#AB784A] text-white transition-colors resize-none placeholder:text-gray-600"
                      placeholder="e.g. Looking for roles..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#AB784A] hover:bg-[#976436] text-white font-medium rounded transition-colors flex items-center justify-center gap-2"
                    >
                      Submit Profile
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}