"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import Loader from "@/components/custom ui/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/custom ui/DataTable";
import { ProductType } from "@/lib/actions/shared.types";
import { columns } from "@/components/form/ProductColumns";

const Products = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log("[products_GET]", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <p className="font-bold">Products</p>
        <Button
          className="bg-blue-500 text-white"
          onClick={() => router.push("/dashboard/products/new")}
        >
          <Plus className="mr-2 size-4" />
          Create Product
        </Button>
      </div>
      <Separator className="my-4 bg-gray-400" />
      <DataTable columns={columns} data={products} searchKey="title" />
    </div>
  );
};

export default Products;
