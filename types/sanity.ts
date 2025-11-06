export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Author {
  _id: string;
  name: string;
  image?: SanityImage;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: SanityImage;
  categories?: string[];
  excerpt?: string;
  content?: any[]; // This would be the Portable Text content
  author?: Author;
}

// Add more interfaces as needed based on your schema 