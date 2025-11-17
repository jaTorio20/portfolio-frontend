type PostFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void
}

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
  return ( 
    <div className="flex justify-between">
      <h2 className="text-3xl text-white font-bold mb-8">
        Blog
      </h2>
      <div className="mb-4">
        <input 
        type="text"
        value={searchQuery} 
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search Blog..."
        className="w-full px-4 py-2 rounded-lg bg-gray-900
        text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"/>
      </div>
    </div>
   );
}
 
export default PostFilter;