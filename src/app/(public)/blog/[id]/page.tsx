import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id:string
  }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blog/${id}`,
    {
      cache: "no-store",
    }
  );

  const blog = await res.json();
  console.log(blog,"blog")
  console.log("param id",id)

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 mb-8"
      >
        ← Back to Blogs
      </Link>

      {/* Thumbnail */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
        <Image
          src={blog.thumbnail}
          alt={blog.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      {/* Blog Content */}
      <article>
        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          {blog.slug}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="whitespace-pre-line leading-8 text-slate-700 dark:text-slate-300">
            {blog.content}
          </p>
        </div>
      </article>
    </section>
  );
}