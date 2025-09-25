const SideBar = () => (
  <aside class="w-64 bg-white shadow-lg p-6 hidden md:block">
    <nav class="flex flex-col gap-4">
      <a href="/dashboard" class="text-blue-700 font-semibold hover:underline">Dashboard Home</a>
      <a href="/dashboard/search" class="hover:underline">Company Search</a>
      <a href="/dashboard/scrape" class="hover:underline">Web Scraping</a>
      <a href="/dashboard/companies" class="hover:underline">Company List</a>
    </nav>
  </aside>
);

export default SideBar;