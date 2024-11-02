import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  BellAlertIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../AuthContext";

function SideNav({ isNavOpen, toggleNav }) {
  const { logout } = useAuth();
  const navLinks = [
    {
      name: "Analytics",
      href: "/account",
      icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Users",
      href: "/users",
      icon: <UserIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Notifications",
      href: "/notification",
      icon: <BellAlertIcon className="h-5 w-5 text-primary-600" />,
    },
    {
      name: "Transactions",
      href: "/transactions",
      icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
    },
  ];

  const activeLink = "/account";

  return (
    <nav
      className={`fixed top-0 left-0 h-full lg:h-screen w-64 bg-white shadow-md border-r border-yellow-300 z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h4 className="text-2xl text-black font-bold ml-6 mt-3">AppZest</h4>

      <ul className="flex flex-col gap-2 h-[90%] text-base mt-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              className={`py-3 px-5 flex items-center font-semibold gap-4  transition-colors ${
                link.href === activeLink
                  ? "bg-stone-400 text-emerald-50"
                  : "text-black hover:bg-stone-400 hover:text-emerald-50"
              }`}
              href={link.href}
              onClick={toggleNav}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </li>
        ))}
        <li
          className="py-3 cursor-pointer px-5 flex items-center font-semibold gap-4  transition-colors text-black hover:bg-stone-400 hover:text-emerald-50"
          onClick={() => {
            logout();
          }}
        >
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
          <span>logout</span>
        </li>

        <li className="mt-auto border-t border-green-400 p-5">
          <div className="flex gap-10 items-center">
            <div className="avatar">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </div>
            <div className="text-center text-black">Premnath</div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
