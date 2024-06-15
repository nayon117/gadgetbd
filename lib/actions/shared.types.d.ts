import { IUser } from "@/mongodb";
export interface CreateUserParams {
    clerkId: string;
    name: string;
    email: string;
    picture: string;
  }
  export interface GetUserByIdParams {
    userId: string;
  }
  export interface GetAllUsersParams {
    page?: number;
    pageSize?: number;
    filter?: string;
    searchQuery?: string; 
  }
  export interface UpdateUserParams {
    clerkId: string;
    updateData: Partial<IUser>;
    path: string;
  }
  export interface DeleteUserParams {
    clerkId: string;
  }