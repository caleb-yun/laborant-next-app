export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="text-xl font-medium text-rose-500 tracking-tight">Laborant</a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 text-gray-700 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Agents</a>
            <a href="#" className="text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-md px-3 py-2 text-sm font-medium">Maps</a>
            <a href="#" className="text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-md px-3 py-2 text-sm font-medium">Weapons</a>
          </div>
        </div>
          </div>
        </div>
      </div>
    </nav>
  );
}