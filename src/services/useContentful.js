import { createClient } from "contentful";
import dotenv from "dotenv";

const useContentful = () => {
  const client = createClient({
    space: "iopcml84o5md",
    accessToken: "kdWwGHCWEiiikdyqQayI2dyLx4TjIt_GnJhHfesRN2A",
    host: "cdn.contentful.com",
  });

  const getProyects = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "javiLopezProyect",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching Proyects: ${error}`);
    }
  };

  const getSponsors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "javiLopezSponsor",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        console.log("map item", item.fields);
        return {
          ...item.fields.nombreDeSponsors,
        };
      });
      console.log("sanitized", sanitizedEntries);

      return entries;
    } catch (error) {
      console.log(`Error fetching sponsors ${error}`);
    }
  };

  return {
    getProyects,
    getSponsors,
  };
};
export default useContentful;
