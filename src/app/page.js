export default function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-gray-100 h-[910px]">
        <input placeholder="Search" type="search"></input>
        <button type="button">Search</button>
      </div>
      
      <div className="bg-gray-900 h-[910px]"></div>
    </div>
  );
}
