import { NavigationItem } from "./NavigationItem";

export const Sidebar = () => {
  return (
    <nav className="flex flex-col px-0 py-6 border-r border-solid w-[250px] max-sm:hidden">
      <h1 className="px-6 py-0 mb-8 text-2xl font-semibold text-gray-900">
        Logo
      </h1>
      <div className="flex flex-col gap-2">
        <NavigationItem
          icon="layout-dashboard"
          text="Dashboard"
          isActive={true}
        />
        <NavigationItem icon="users" text="Users" />
        <NavigationItem icon="file-analytics" text="Reports" />
        <NavigationItem icon="settings" text="Settings" />
      </div>
    </nav>
  );
};
