import { getAuthTokenClient } from "@/lib/auth/auth-client";
import { ProjectType } from "@/types/projects";
import {
  LinksType,
  MessageType,
  MetaType,
  StatusCodeType,
} from "@/types/Response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProjectsResponse {
  data: ProjectType[];
  links: LinksType;
  meta: MetaType;
  message: MessageType;
  status_code: StatusCodeType;
}

interface ProjectsByIdResponse {
  data: {
    project: ProjectType;
    other_projects: ProjectType[];
  };
  message: MessageType;
  status_code: StatusCodeType;
}

interface ProshorResponse {
  data: {
    id: number;
    proshor: string;
  };
  message: MessageType;
  status_code: StatusCodeType;
}

export const ProjectsApi = createApi({
  reducerPath: "ProjectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const token = getAuthTokenClient();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Projects", "ProjectsById", "Proshor"],
  endpoints: (builder) => ({
    getAllProjects: builder.query<
      ProjectsResponse,
      { city?: string; page?: number }
    >({
      query: ({ city, page }) => `/projects?city=${city}&page=${page}`,
      providesTags: ["Projects"],
    }),

    getProjectById: builder.query<ProjectsByIdResponse, number>({
      query: (id) => `/projects/${id}`,
      providesTags: ["ProjectsById"],
    }),

    getProjectsByUser: builder.query<ProjectsResponse, number>({
      query: (page) => `/user/project?page=${page}`,
      providesTags: ["Projects"],
    }),

    getProjectProshor: builder.query<ProshorResponse, number>({
      query: (projectId) => `/proshor-projects/${projectId}`,
      providesTags: ["Proshor"],
    }),

    storeProject: builder.mutation<ProjectsByIdResponse, FormData>({
      query: (body) => ({
        url: `/projects`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Projects"],
    }),

    DeleteProject: builder.mutation<ProjectsResponse, number>({
      query: (projectId) => ({
        url: `/projects${projectId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useGetProjectsByUserQuery,
  useGetProjectProshorQuery,
  useStoreProjectMutation,
  useDeleteProjectMutation,
} = ProjectsApi;
