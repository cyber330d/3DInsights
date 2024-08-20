import Link from "next/link";
import { Tag } from "lucide-react"; // Use an appropriate avatar icon or component

interface CategoryCardProps {
  name: string;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, slug }) => {
  return (
    <Link href={`/courses?category=${slug}`} passHref>
      <div className="flex flex-col items-center justify-center cursor-pointer w-40 h-40 bg-white shadow rounded-lg p-4 hover:bg-gray-100">
        <Tag className="w-16 h-16 text-lms-green" />
        <h4 className="text-lg font-bold mt-2">{name}</h4>
      </div>
    </Link>
  );
};

const categories = [
  { name: "Engineering", slug: "engineering" },
  { name: "Biology", slug: "biology" },
  { name: "Physics", slug: "physics" },
  { name: "Mechanics", slug: "mechanics" },
  { name: "Anatomy", slug: "anatomy" },
  { name: "Electronics", slug: "electronics" },
  { name: "Computer Science", slug: "computer-science" },
];

export default function TopCategories() {
  return (
    <div className="flex flex-col items-center justify-center self-stretch gap-4 md:gap-12 p-4 md:px-12 md:py-10 md:mt-28 shadow w-full">
      <div className="flex flex-col items-center justify-center gap-1 sm:gap-4 text-xl leading-10">
        <h2 className="">Top Categories</h2>
        <p className="text-sm text-justify font-normal leading-normal text-neutral-700">
          Explore a wide range of categories with over 1,000 unique online
          courses.
        </p>
      </div>
      <div className="course-container flex items-center grid-cols-8 justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            name={category.name}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
}
