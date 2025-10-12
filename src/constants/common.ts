import PATH from '@/routes.ts';
import { invert } from 'es-toolkit';

export const NAV_PATHS = {
  blog: PATH.home,
  about: PATH.about,
  contact: PATH.contact,
};

export const NAV_PAGE_NAMES = invert(NAV_PATHS);
