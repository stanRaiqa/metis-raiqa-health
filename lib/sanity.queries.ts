import { client } from './sanity.client';
import { groq } from 'next-sanity';

// Example query to get all posts
export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      excerpt,
      "author": author->{name, image}
    }`
  );
}

// Example query to get a single post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title,
      content,
      "author": author->{name, image}
    }`,
    { slug }
  );
} 