import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetails({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`,
    {
      cache: "no-store",
    }
  );

  const project = await res.json();

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Link
        href="/project"
        className="inline-block mb-8 text-indigo-600 hover:text-indigo-800 font-medium"
      >
        ← Back to Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden rounded-xl border">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-500 mb-2">
            {project.slug}
          </p>

          <h1 className="text-4xl font-bold mb-4">
            {project.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}