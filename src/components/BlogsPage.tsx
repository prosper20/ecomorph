import { Blog } from "@/lib/data/blogs";
import { SingleBlogRow } from "./SingleBlogRow";
import { DoubleBlogRow } from "./DoubleBlogRow";

interface BlogGridProps {
  blogs: Blog[];
}

export const BlogsPage = ({ blogs }: BlogGridProps) => {
  const rows = [];

  for (let i = 0; i < blogs.length; i += 3) {
    const isReverse = Math.floor(i / 3) % 2 === 1;
    rows.push(<SingleBlogRow key={`f-${i}`} blog={blogs[i]} reverse={isReverse} />);
    if (blogs[i + 1] && blogs[i + 2]) {
      rows.push(<DoubleBlogRow key={`p-${i}`} blogs={[blogs[i + 1], blogs[i + 2]]} />);
    }
  }

  return (
  <section className="px-4 md:px-10 lg:px-20">
    <div className="max-w-[1200px] mx-auto w-full">
      {rows}
    </div>
  </section>
);
};
