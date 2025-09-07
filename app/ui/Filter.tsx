interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function Filter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="mb-8 flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1 rounded text-sm cursor-pointer ${
            selected === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-black'
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
