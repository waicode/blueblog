import { createError } from 'h3';

export const notFound = () => {
  throw createError({ statusCode: 404 });
};
