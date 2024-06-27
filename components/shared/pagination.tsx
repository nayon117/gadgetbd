"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const Pagination: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "5";

  return (
    <div className="flex gap-2">
      <button
        className="primary-gradient p-1 text-white"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/products/?page=${Number(page) - 1}&perPage=${perPage}`);
        }}
      >
        prev
      </button>

      <div className="text-dark200_light800">
        {page} / {Math.ceil(10 / Number(perPage))}
      </div>

      <button
        className="primary-gradient p-1 text-white"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/products/?page=${Number(page) + 1}&perPage=${perPage}`
          );
        }}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
