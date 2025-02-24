import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: ["*.mdx"], base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional().default(false),
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

const servicesCollection = defineCollection({
  loader: glob({ pattern: ["*.mdx"], base: "src/content/services" }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional().default(false),
      weight: z.number(),
      name: z.string(),
      shortName: z.string(),
      description: z.string(),
      type: z.string(),
      duration: z.string().optional(),
      requiresHospitalization: z.boolean().optional().default(false),
      icon: z.string(),
      image: image(),
    }),
});

const siteCollection = defineCollection({
  loader: file("src/content/site/index.yml"),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      logo: z.string(),
      image: image(),
      description: z.string(),
      aboutList: z.array(z.string()),
      basepath: z.string().url(),
      keywords: z.array(z.string()),
      author: z.object({
        name: z.string(),
        email: z.string().email(),
        url: z.string().url(),
      }),
      heroslider: z.array(
        z.object({
          image: image(),
          bgImage: image(),
          title: z.string(),
          subtitle: z.string(),
          btnText: z.string(),
          link: z.string(),
        })
      ),
      menulinks: z.array(
        z.object({
          id: z.number(),
          text: z.string(),
          link: z.string(),
        })
      ),
      footerAbout: z.string(),
      footerDescription: z.string(),
      footerMenuTitle: z.string(),
      copyright: z.string(),
      contactTitle: z.string(),
      socialTitle: z.string(), 
      serviceTitle: z.string(),
      serviceSubtitle: z.string(),
      servicesList: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          icon: z.string(),
        })
      ),
      socials: z.array(
        z.object({
          name: z.string(),
          text: z.string().optional(),
          icon: z.string().optional(),
          link: z.string().url(),
        })
      ),
      contact: z.array(
        z.object({
          href: z.string(),
          text: z.string().optional(),
          icon: z.string().optional(),
          name: z.array(z.string()),
        })
      ),
      gallery: z.array(
        z.object({
          title: z.string(),
          image: image(),
        })
      ),
      stats: z.array(
        z.object({
          title: z.string(),
          initial: z.number(),
          target: z.number(),
        })
      ),
      testimonialsTitle: z.string(),
      testimonials: z.array(
        z.object({
          name: z.string(),
          icon: z.string(),
          treatment: z.string(),
          comments: z.string(),
        })
      ),
      timmingsTitle: z.string(),
      timmings: z.array(
        z.object({
          title: z.string(),
          details: z.string(), 
        })
      ),
    }),
});

const aboutCollection = defineCollection({
  loader: file("src/content/about/index.yml"),
  schema: ({ image }) =>
    z.object({
      awardsTitle: z.string(),
      doctorPic: image(),
      doctorName: z.string(),
      aboutDoctor: z.array(z.string()),
      professionalProfile: z.array(z.string()),
      affiliationsMemberships: z.array(z.string()),
      clinicalExpertise: z.array(z.string()),
      awardsList: z.array(
        z.object({
          name: z.string(),
          year: z.number(),
          from: z.string(),
        })
      ),
      educationHistory: z.array(
        z.object({
          degree: z.string(),
          institution: z.string(),
          university: z.string(),
          duration: z.string(),
        })
      ),
      publications: z.array(
        z.object({
          title: z.string(),
          authors: z.array(z.string()),
          journal: z.string(),
          year: z.number(),
          volume: z.number().optional(),
          issue: z.number().optional(),
          pages: z.string().optional(),
          doi: z.string().optional(),
          link: z.string().optional(),
          id: z.number(),
        })
      ),
    }),
});

export const collections = {
  blogCollection,
  aboutCollection,
  siteCollection,
  servicesCollection,
};
