import type { Metadata } from "next";
import ClientPage from "./ClientPage";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Job titles come from a client-side Google Sheets CSV, so we can't
  // generate per-job metadata statically. Use a generic, slug-derived title
  // that's still useful for search results and crawlers.
  const slugTitle = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${slugTitle} | Careers`,
    description: `Apply for ${slugTitle} at Digifocal IT Solutions. Browse our open roles and submit your application online.`,
    alternates: { canonical: `/careers/${params.slug}` },
    openGraph: {
      title: `${slugTitle} | Digifocal Careers`,
      description: `Apply for ${slugTitle} at Digifocal IT Solutions.`,
      url: `/careers/${params.slug}`,
      type: "website",
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
