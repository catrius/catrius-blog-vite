const PATH = {
  home: '/',
  contact: '/contact',
  post: '/post/:id',
  postEdit: '/post/:id/edit',
  search: '/search',
  page: '/page/:name',
};

export const buildPostPath = (id: string | number) => PATH.post.replace(':id', id.toString());
export const buildPagePath = (name: string | number) => PATH.page.replace(':name', name.toString());
export const buildSearchPath = (query: string) => `${PATH.search}?q=${query}`;

export const NAV_PATHS = {
  blog: PATH.home,
  about: buildPagePath('about'),
  contact: PATH.contact,
};

export const NAV_PAGE_NAMES = {
  [PATH.home]: 'The Blog',
  [PATH.search]: 'Search Results',
};

export default PATH;
