// pages/blog.tsx
import { posts } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Page of GadgetBd Store",
};

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-dark200_light800 mb-8 text-center text-4xl font-bold">
        Blogs
      </h1>
      {!posts || posts.length === 0 ? (
        <p className="text-center font-bold">No blog posts found</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-semibold">
                  <Link href={`/blog/${post.id}`}>
                    <p>{post.title}</p>
                  </Link>
                </h2>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <p className="text-blue-600 hover:underline">Read more</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
