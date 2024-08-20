// CategoryCard.tsx
import Link from "next/link";
import { Tag } from "lucide-react"; // Replace with appropriate import if needed

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

export default CategoryCard;
