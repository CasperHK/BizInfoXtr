import { Menu, MenuTrigger, MenuContent, MenuItem } from '@ark-ui/solid/menu';
import { createSignal } from 'solid-js';
import ConfirmLogoutDialog from '@dialogs/ConfirmLogoutDialog';

const TopNav = () => {
  const [open, setOpen] = createSignal(false);
  const [showLogout, setShowLogout] = createSignal(false);

  const handleMenu = () => setOpen(!open());
  const handleClose = () => setOpen(false);
  const handleLogoutClick = () => setShowLogout(true);
  const handleLogoutConfirm = () => {
    setShowLogout(false);
    // Add your logout logic here
  };
  const handleLogoutCancel = () => setShowLogout(false);

  return (
    <nav class="w-full bg-white shadow flex items-center justify-between px-8 py-4">
      <a href="/dashboard" class="text-2xl font-bold text-blue-700">BizInfoXtr Dashboard</a>
      <div class="relative">
        <span
          class="inline-block w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300 cursor-pointer"
          tabIndex={0}
          onClick={handleMenu}
          onBlur={handleClose}
        >
          <img src="https://i.pravatar.cc/40" alt="User" class="w-full h-full object-cover" onError={e => { e.currentTarget.style.display = 'none'; }} />
          <span class="flex items-center justify-center w-full h-full text-gray-500 text-lg font-bold">U</span>
        </span>
        {open() && (
          <div class="absolute right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-10">
            <a href="/dashboard/profile" class="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="/dashboard/settings" class="block w-full text-left px-4 py-2 hover:bg-gray-100">Settings</a>
            <div class="border-t border-gray-200 my-2"></div>
            <button class="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100" onClick={handleLogoutClick}>Logout</button>
          </div>
        )}
        <ConfirmLogoutDialog open={showLogout()} onConfirm={handleLogoutConfirm} onCancel={handleLogoutCancel} />
      </div>
    </nav>
  );
};

export default TopNav;