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
        const image = item.fields.projectImage?.fields.file.url;
        const { projectDescription, projectTitle, inglesProjectDescription } =
          item?.fields;
        return {
          projectDescription,
          projectTitle,
          image,
          inglesProjectDescription,
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
        const {
          cuerpoDeTextoSponsor,
          nombreDeSponsor,
          enlaceWebSponsor,
          inglesCuerpoDeTextoDeSponsor,
        } = item.fields;
        const sponsorImage = item.fields.sponsorFoto.fields.file.url;
        return {
          nombreDeSponsor,
          cuerpoDeTextoSponsor,
          enlaceWebSponsor,
          sponsorImage,
          inglesCuerpoDeTextoDeSponsor,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching sponsors ${error}`);
    }
  };

  const getHomePhotos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "javiLopezFotoHome",
        select: "fields",
      });

      const sanitizedEntries = entries.items[0].fields.homeFoto.map(
        (photoInfo) => {
          return photoInfo.fields.file.url;
        }
      );

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching home photos ${error}`);
    }
  };
  return {
    getProjects,
    getSponsors,
    getHomePhotos,
  };
};
export default useContentful;
