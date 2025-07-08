
import {
  BarChart3,
  Kanban,
  Inbox,
  Users,
  Package,
  LogIn,
  UserPlus,
  Menu,
  X
} from "lucide-react";

export function SideBar({ isOpen = true, onToggle }) {
  const menuItems = [
    { icon: BarChart3, label: "Dashboard", href: "#" },
    { icon: Kanban, label: "Faults", href: "#", badge: "0" },
    { icon: Inbox, label: "Beacons", href: "#"},
    { icon: Users, label: "Jobs", href: "#" },
    { icon: Package, label: "VMs", href: "#" },
    { icon: LogIn, label: "Logout", href: "#" },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-screen bg-white border-r border-gray-200 shadow-lg transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex items-center justify-between">
        {isOpen && <h2 className="text-lg font-semibold text-gray-900">Menu</h2>}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center ${isOpen ? 'justify-between' : 'justify-center'} px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 ${!isOpen ? 'tooltip-container' : ''}`}
                  title={!isOpen ? item.label : ''}
                >
                  <div className="flex items-center">
                    <IconComponent className={`w-5 h-5 ${isOpen ? 'mr-3' : ''}`} />
                    {isOpen && <span>{item.label}</span>}
                  </div>
                  {isOpen && item.badge && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
