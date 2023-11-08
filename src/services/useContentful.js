import { createClient } from "contentful";
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

  return { getProyects };
};
export default useContentful;
