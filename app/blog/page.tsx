import { BlogCard } from "@/components/blog-card";
import { blogs } from "@/data/blogs";

export default function Page() {
  return (
    <div className="flex justify-center px-6 sm:px-12">
      <article className="lg-py-24 flex flex-col items-center gap-6 py-12 sm:max-w-screen-lg sm:gap-12">
        <p className="font-display text-6xl font-black">Blog Posts</p>
        {blogs.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </article>
    </div>
  );
}
