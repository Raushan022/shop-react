import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const [size, setSize] = useState(280);
  const [mobileSize, setMobileSize] = useState(0);
  const [accountMenu, setAccountMenu] = useState(false);

  const menus = [
    {
      sno: 1,
      label: "Dashboard",
      icon: <i className="ri-dashboard-3-line mr-2"></i>,
      link: "/admin/dashboard",
    },
    {
      sno: 2,
      label: "Customers",
      icon: <i className="ri-user-line mr-2"></i>,
      link: "/admin/customers",
    },
    {
      sno: 3,
      label: "Products",
      icon: <i className="ri-shopping-cart-line mr-2"></i>,
      link: "/admin/products",
    },
    {
      sno: 4,
      label: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      link: "/admin/orders",
    },
    {
      sno: 5,
      label: "Payments",
      icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
      link: "/admin/payments",
    },

    {
      sno: 6,
      label: "Settings",
      icon: <i className="ri-settings-3-line mr-2"></i>,
      link: "/admin/settings",
    },
  ];

  return (
    <>
      {/* Desktop */}
      <div className="md:block hidden">
        <aside
          className="bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
          style={{
            width: size,
            transition: "0.3s",
          }}
        >
          <div className="flex flex-col">
            {menus.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                // className="px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white ${
                    isActive ? "bg-yellow-600" : ""
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <button className="text-left px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white">
              <i className="ri-logout-circle-r-line mr-2"></i>
              Logout
            </button>
          </div>
        </aside>
        <section
          className="bg-gray-100 h-screen"
          style={{
            marginLeft: size,
            transition: "0.3s",
          }}
        >
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                onClick={() => setSize(size === 280 ? 0 : 280)}
              >
                <i className="ri-menu-2-line text-xl"></i>
              </button>
              <h1 className="text-md font-semibold">Shopcode</h1>
            </div>

            <div>
              <button className="relative">
                <img
                  src="/images/avt.jpg"
                  className="w-10 h-10 rounded-full"
                  onClick={() => setAccountMenu(!accountMenu)}
                />
                {accountMenu && (
                  <div className="absolute top-[76px] right-0 bg-white w-[200px] p-6 shadow-lg">
                    <div>
                      <h1 className="text-lg font-semibold">Er Raushan</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="h-px bg-gray-200 my-4"></div>
                      <button className="hover:cursor-pointer">
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">{children}</div>
        </section>
      </div>

      {/* mobile */}
      <div className="md:hidden block">
        <aside
          className="bg-indigo-600 fixed top-0 left-0 h-full z-50 overflow-hidden"
          style={{
            width: mobileSize,
            transition: "0.3s",
          }}
        >
          <div className="flex flex-col">
            <button
              className="text-left mx-4 mt-4"
              onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
            >
              <i className="ri-menu-2-fill text-white text-xl"></i>
            </button>
            {menus.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                // className="px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white"
                className={({ isActive }) =>
                  `px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white ${
                    isActive ? "bg-yellow-600" : ""
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
            <button className="text-left px-4 py-3 text-gray-100 text-[17.5px] hover:bg-rose-500 hover:text-white">
              <i className="ri-logout-circle-r-line mr-2"></i>
              Logout
            </button>
          </div>
        </aside>
        <section className="bg-gray-100 h-screen">
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              <button
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8"
                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
              >
                <i className="ri-menu-2-line text-xl"></i>
              </button>
              <h1 className="text-md font-semibold">Shopcode</h1>
            </div>

            <div>
              <button className="relative">
                <img
                  src="/images/avt.jpg"
                  className="w-10 h-10 rounded-full"
                  onClick={() => setAccountMenu(!accountMenu)}
                />
                {accountMenu && (
                  <div className="absolute top-[76px] right-0 bg-white w-[200px] p-6 shadow-lg">
                    <div>
                      <h1 className="text-lg font-semibold">Er Raushan</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                      <div className="h-px bg-gray-200 my-4"></div>
                      <button className="hover:cursor-pointer">
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          <div className="p-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;
