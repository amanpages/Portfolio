import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'b1k53e9q',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skgJSKY5v9BpYoeKDG9nr58OrlptG6IsFvgxE4FjIyz1StfJbNhAWxNyNN28HKejZSC6abuiEywlujW2mJaW3xzCvVeSYElbZE4k7Bl8kUpfQWPx1Vd8c9fmTdvWkQxEw0XNxOGY75PHZOU0hk26CkBOpjByCLDOzc6GquzaR5f4X5MF09u0',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);