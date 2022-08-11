export const notFound = () => {
  throw createError({ statusCode: 404 });
};
