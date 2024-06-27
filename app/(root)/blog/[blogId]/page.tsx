import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/constants";

interface PostDetailsProps {
  params: {
    blogId: string;
  };
}

const PostDetails = ({ params }: PostDetailsProps) => {
  const post = posts.find((post) => post.id === params.blogId);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/blog">
        <p className="text-blue-600 hover:underline">&larr; Back to Blog</p>
      </Link>
      <div className="mt-6 flex flex-col items-center">
        <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="mb-6 w-full rounded-lg object-cover shadow-lg"
        />
        <div className="text-dark200_light800 prose max-w-4xl">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
