import { JsonLd } from "@/components/seo/JsonLd";
import { HomePageClient } from "@/components/home/HomePageClient";
import {
  getFAQSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[getOrganizationSchema(), getWebSiteSchema(), getFAQSchema()]}
      />
      <HomePageClient />
    </>
  );
}
