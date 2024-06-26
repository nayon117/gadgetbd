import { getOrders } from "@/lib/actions/order.action";
import { OrderItemType, OrderType } from "@/lib/actions/shared.types";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);


  return (
    <div className="px-10 py-5 max-sm:px-3">
      <p className="my-10 font-bold">Your Orders</p>
      {!orders ||
        (orders.length === 0 && (
          <p className="my-5 font-bold">You have no orders yet.</p>
        ))}

      <div className="flex flex-col gap-10">
        {orders?.map((order: OrderType) => (
          <div
            key={order._id}
            className="flex flex-col gap-8 p-4 hover:bg-gray-200"
          >
            <div className="flex gap-20 max-md:flex-col max-md:gap-3">
              <p className="font-bold">Order ID: {order._id}</p>
              <p className="font-bold">Total Amount: ${order.totalAmount}</p>
            </div>

            <div className="flex flex-col gap-5">
              {order.products.map((orderItem: OrderItemType) => (
                <div key={orderItem._id} className="flex gap-4">
                  <Image
                    src={orderItem.product.media[0]}
                    alt={orderItem.product.title}
                    width={100}
                    height={100}
                    className="size-32 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-medium">
                      Title:{" "}
                      <span className="font-bold">
                        {orderItem.product.title}
                      </span>
                    </p>

                    <p className="font-medium">
                      Unit price:{" "}
                      <span className="font-bold">
                        {orderItem.product.price}
                      </span>
                    </p>
                    <p className="font-medium">
                      Quantity:{" "}
                      <span className="font-bold">{orderItem.quantity}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";
