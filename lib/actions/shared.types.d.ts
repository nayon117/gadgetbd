
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

  export interface UserType  {
    clerkId: string;
    wishlist: [string];
    createdAt: string;
    updatedAt: string;
  };
  export interface OrderType  {
    shippingAddress: Object;
    _id: string;
    customerClerkId: string;
    // eslint-disable-next-line no-use-before-define
    products: [OrderItemType]
    shippingRate: string;
    totalAmount: number
  }
  
  export interface OrderItemType  {
    product: ProductType;
    quantity: number;
    _id: string;
  }
 

  