import { useLocation } from 'solid-app-router';

const SideBar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);
  return (
    <aside class="w-64 bg-white shadow-lg p-6 hidden md:block">
      <nav class="flex flex-col gap-4">
        <a href="/dashboard/overview" class={isActive('/dashboard/overview') ? 'text-blue-700 font-semibold underline' : 'hover:underline'}>Dashboard Home</a>
        <a href="/dashboard/search" class={isActive('/dashboard/search') ? 'text-blue-700 font-semibold underline' : 'hover:underline'}>Company Search</a>
        <a href="/dashboard/scrape" class={isActive('/dashboard/scrape') ? 'text-blue-700 font-semibold underline' : 'hover:underline'}>Web Scraping</a>
        <a href="/dashboard/companies" class={isActive('/dashboard/companies') ? 'text-blue-700 font-semibold underline' : 'hover:underline'}>Company List</a>
      </nav>
    </aside>
  );
};

export default SideBar;