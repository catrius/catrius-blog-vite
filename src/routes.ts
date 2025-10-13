const PATH = {
  home: '/',
  about: '/about',
  contact: '/contact',
  post: '/post/:id',
  search: '/search',
};

export const buildDetailPath = (path: string) => (id: string | number) => path.replace(':id', id.toString());
export const buildPostPath = buildDetailPath(PATH.post);
export const buildSearchPath = (query: string) => `${PATH.search}?q=${query}`;

export default PATH;
