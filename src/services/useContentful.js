import { createClient } from "contentful";
import dotenv from "dotenv";

const useContentful = () => {
  const client = createClient({
    space: "iopcml84o5md",
    accessToken: "kdWwGHCWEiiikdyqQayI2dyLx4TjIt_GnJhHfesRN2A",
    host: "cdn.contentful.com",
  });

  const getProjects = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "javiLopezProject",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        console.log("ITEM", item);
        const image = item.fields.projectImage?.fields.file.url;
        const { projectDescription, projectTitle } = item?.fields;
        console.log("DESCRIPTION", projectDescription, "Title", projectTitle);
        return {
          projectDescription,
          projectTitle,
          image,
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
        return {
          ...item.fields.nombreDeSponsors,
        };
      });

      return entries;
    } catch (error) {
      console.log(`Error fetching sponsors ${error}`);
    }
  };

  return {
    getProjects,
    getSponsors,
  };
};
export default useContentful;
