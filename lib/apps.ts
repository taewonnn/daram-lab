export type AppFeature = {
  title: string;
  description: string;
};

export type App = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  screenshots: string[];
  features: AppFeature[];
  playStoreUrl: string;
  privacyPolicySlug: string;
};

export const apps: App[] = [];
