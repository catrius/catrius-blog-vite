import PATH from '@/routes.ts';

export const NAV_PATHS = {
  blog: PATH.home,
  about: PATH.about,
  contact: PATH.contact,
};

export const NAV_PAGE_NAMES = {
  [PATH.home]: 'The Blog',
  [PATH.about]: 'About',
  [PATH.contact]: 'Contact',
  [PATH.search]: 'Search Results',
};

export const PageSize = 12;
