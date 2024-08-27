import { Recommendations } from "../types";

export const buttonData = [
  {
    id: "upload-files",
    text: "Upload files",
  },
  {
    id: "website-urls",
    text: "Website URLs",
  },
  {
    id: "freeform-text",
    text: "Freeform text",
  },
];

export const recommendedDocumentsData: Recommendations = {
  heading: "Recommended documents",
  documents: [
    { id: 1, title: "Project case study" },
    { id: 2, title: "Details on your services" },
    { id: 3, title: "Previous project proposals" },
    { id: 4, title: "Client onboarding guide" },
    { id: 5, title: "Pricing and packaging" },
    { id: 6, title: "Blog posts you've written" },
  ],
};
export const recommendedWebsites: Recommendations = {
  heading: "Recommended websites",
  documents: [
    { id: 1, title: "Your design portfolio Project" },
    { id: 2, title: "Project case studies" },
    { id: 3, title: "Links to your services" },
    { id: 4, title: "Blog posts you’ve written" }
  ],
};

export const recommendedContent: Recommendations = {
    heading: "Recommended content",
    documents: [
      { id: 1, title: "Answers to FAQs" },
      { id: 2, title: "Anything not covered within your uploads and websites" },
    ],
  };

  
