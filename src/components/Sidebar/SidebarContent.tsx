import routes from "../../routes/sidebar";
import { Link, NavLink } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";
import { IconName, IconProps } from "../../types/app";

function Icon({ icon, ...props }: IconProps) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        to={"/app/dashboard"}
      >
        E-Commerce
      </Link>
      <ul className="mt-6">
        {routes.slice(0, -3).map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                    isActive ? "text-gray-800 dark:text-gray-100" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                    <Icon
                      className="w-5 h-5"
                      aria-hidden="true"
                      icon={route.icon as IconName}
                    />
                    <span className="ml-4">{route.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          )
        )}

        <hr className="customeDivider mx-4 my-5" />

        {routes.slice(-3).map((route) => (
          <li className="relative px-6 py-3" key={route.name}>
            <NavLink
              to={route.path || ""}
              className={({ isActive }) =>
                `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  isActive ? "text-gray-800 dark:text-gray-100" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  )}
                  <Icon
                    className="w-5 h-5"
                    aria-hidden="true"
                    icon={route.icon as IconName}
                  />
                  <span className="ml-4">{route.name}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="px-6 my-6">
        <Button className="py-2">
          Genarate Report
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  );
}

export default SidebarContent;
