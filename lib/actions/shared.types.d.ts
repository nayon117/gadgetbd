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

  export interface CollectionType  {
    _id: string;
    title: string;
    description: string;
    image: string;
    // eslint-disable-next-line no-use-before-define
    products: ProductType[];
  };

  export interface ProductType {
    _id: string;
    title: string;
    description: string;
    media: [string];
    category: string;
    collections: [CollectionType];
    tags: [string];
    price: number;
    expense: number;
    createdAt: Date;
    updatedAt: Date;
  }

 

  