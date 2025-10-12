const PATH = {
  home: '/',
  about: '/about',
  contact: '/contact',
  post: '/post/:id',
};

export const buildDetailPath = (path: string) => (id: string | number) => path.replace(':id', id.toString());
export const buildPostPath = buildDetailPath(PATH.post);

export default PATH;
