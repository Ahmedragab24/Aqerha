import { getAllRealEstates } from "@/lib/api/RealEstate";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const estates = await getAllRealEstates();
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    estates?.data?.map((estate: any) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/real-estate/${estate.id}`,
      lastModified: new Date(estate.updated_at || estate.created_at),
      changeFrequency: "daily",
      priority: 0.8,
    })) || []
  );
}
