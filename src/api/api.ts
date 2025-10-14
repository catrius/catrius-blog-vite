import { emptySplitApi as api } from "../store/api-slices/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    $get: build.query<$getApiResponse, $getApiArg>({
      query: () => ({ url: `/` }),
    }),
    getPost: build.query<GetPostApiResponse, GetPostApiArg>({
      query: (queryArg) => ({
        url: `/post`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          excerpt: queryArg.excerpt,
          thumbnail: queryArg.thumbnail,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postPost: build.mutation<PostPostApiResponse, PostPostApiArg>({
      query: (queryArg) => ({
        url: `/post`,
        method: "POST",
        body: queryArg.post,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deletePost: build.mutation<DeletePostApiResponse, DeletePostApiArg>({
      query: (queryArg) => ({
        url: `/post`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          excerpt: queryArg.excerpt,
          thumbnail: queryArg.thumbnail,
        },
      }),
    }),
    patchPost: build.mutation<PatchPostApiResponse, PatchPostApiArg>({
      query: (queryArg) => ({
        url: `/post`,
        method: "PATCH",
        body: queryArg.post,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          excerpt: queryArg.excerpt,
          thumbnail: queryArg.thumbnail,
        },
      }),
    }),
    getPage: build.query<GetPageApiResponse, GetPageApiArg>({
      query: (queryArg) => ({
        url: `/page`,
        headers: {
          Range: queryArg.range,
          "Range-Unit": queryArg["Range-Unit"],
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          name: queryArg.name,
          select: queryArg.select,
          order: queryArg.order,
          offset: queryArg.offset,
          limit: queryArg.limit,
        },
      }),
    }),
    postPage: build.mutation<PostPageApiResponse, PostPageApiArg>({
      query: (queryArg) => ({
        url: `/page`,
        method: "POST",
        body: queryArg.page,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          select: queryArg.select,
        },
      }),
    }),
    deletePage: build.mutation<DeletePageApiResponse, DeletePageApiArg>({
      query: (queryArg) => ({
        url: `/page`,
        method: "DELETE",
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          name: queryArg.name,
        },
      }),
    }),
    patchPage: build.mutation<PatchPageApiResponse, PatchPageApiArg>({
      query: (queryArg) => ({
        url: `/page`,
        method: "PATCH",
        body: queryArg.page,
        headers: {
          Prefer: queryArg.prefer,
        },
        params: {
          id: queryArg.id,
          created_at: queryArg.createdAt,
          title: queryArg.title,
          content: queryArg.content,
          name: queryArg.name,
        },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type $getApiResponse = unknown;
export type $getApiArg = void;
export type GetPostApiResponse = /** status 200 OK */ Post[];
export type GetPostApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  thumbnail?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostPostApiResponse = unknown;
export type PostPostApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** post */
  post: Post;
};
export type DeletePostApiResponse = unknown;
export type DeletePostApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  thumbnail?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchPostApiResponse = unknown;
export type PatchPostApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  excerpt?: string;
  thumbnail?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** post */
  post: Post;
};
export type GetPageApiResponse = /** status 200 OK */ Page[];
export type GetPageApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  name?: string;
  /** Filtering Columns */
  select?: string;
  /** Ordering */
  order?: string;
  /** Limiting and Pagination */
  range?: string;
  /** Limiting and Pagination */
  "Range-Unit"?: string;
  /** Limiting and Pagination */
  offset?: string;
  /** Limiting and Pagination */
  limit?: string;
  /** Preference */
  prefer?: "count=none";
};
export type PostPageApiResponse = unknown;
export type PostPageApiArg = {
  /** Filtering Columns */
  select?: string;
  /** Preference */
  prefer?:
    | "return=representation"
    | "return=minimal"
    | "return=none"
    | "resolution=ignore-duplicates"
    | "resolution=merge-duplicates";
  /** page */
  page: Page;
};
export type DeletePageApiResponse = unknown;
export type DeletePageApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  name?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
};
export type PatchPageApiResponse = unknown;
export type PatchPageApiArg = {
  id?: string;
  createdAt?: string;
  title?: string;
  content?: string;
  name?: string;
  /** Preference */
  prefer?: "return=representation" | "return=minimal" | "return=none";
  /** page */
  page: Page;
};
export type Post = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: number;
  created_at: string;
  title: string;
  content: string;
  excerpt?: string;
  thumbnail?: string;
};
export type Page = {
  /** Note:
    This is a Primary Key.<pk/> */
  id: number;
  created_at: string;
  title: string;
  content: string;
  name: string;
};
export const {
  use$getQuery,
  useLazy$getQuery,
  useGetPostQuery,
  useLazyGetPostQuery,
  usePostPostMutation,
  useDeletePostMutation,
  usePatchPostMutation,
  useGetPageQuery,
  useLazyGetPageQuery,
  usePostPageMutation,
  useDeletePageMutation,
  usePatchPageMutation,
} = injectedRtkApi;
