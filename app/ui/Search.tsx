interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'white' | 'default';
}

function Search({ value, onChange }: SearchProps) {
  return (
    <input
      type="text"
      placeholder="Search . . ."
      value={value}
      onChange={onChange}
      className="text-sm
            px-4 py-2
            border
            border-gray-700
            rounded-lg
            bg-grey-800
            font-medium
            shadow-sm
            mb-6
            w-full
            focus:outline-none focus:ring-2 focus:ring-purple-400"
    />
  );
}
export default Search;
