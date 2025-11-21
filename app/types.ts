export type Project = {
  id: string,
  documentId: string,
  title: string,
  description: string,
  image: string,
  url: string,
  date: string,
  category: string,
  featured: boolean,
  stack: string[]
};

export type Blogs = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  body: string;
};
export type Stack = {
  id: string;
  title: string;
  image?: string;
  link?: string;
  description?: string;
  stack: string;
};

export type StrapiResponse<T> = {
  data: T[]
};

export type StrapiProject = {
  id: string,
  documentId: string,
  title: string,
  description: string,
  image?: {
    url: string,
    formats?: {
      thumbnail?: {url: string;};
      small?: {url: string;};
      medium?: {url: string;};
      large?: {url: string;};
    }
  },
  url: string,
  date: string,
  category: string,
  featured: boolean,
  stack: string[]
};

export type StrapiPost = {
  id: string,
  documentId: string,
  title: string,
  slug: string,
  excerpt: string,
  date: string,
  body: string,
  image?: {
    url: string,
    formats?: {
      thumbnail?: {url: string;};
      small?: {url: string;};
      medium?: {url: string;};
      large?: {url: string;};
    }
  },
};
export type StrapiStack = {
  id: string,
  documentId: string,
  title: string,
  link?: string;
  description?: string;
  stack: string;
  image?: {
    url: string,
    formats?: {
      thumbnail?: {url: string;};
      small?: {url: string;};
      medium?: {url: string;};
      large?: {url: string;};
    }
  },
};