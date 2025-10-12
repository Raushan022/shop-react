import { useState } from "react";

const Layout = ({ children }) => {
  const [sidebarSize, setSidebarSize] = useState(280);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  return (
    <div className="relative">
      <aside
        className="fixed top-0 left-0 h-full bg-indigo-600"
        style={{ width: sidebarSize, transition: "0.3s" }}
      ></aside>
      <section
        className="bg-gray-100 h-screen"
        style={{
          marginLeft: sidebarSize,
          transition: "0.3s",
        }}
      >
        <nav className="bg-white p-6 shadow  flex items-center justify-between sticky top-0 left-0">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setSidebarSize(sidebarSize === 280 ? 0 : 280)}
              className="bg-gray-100 hover:bg-indigo-500 hover:text-white w-8 h-8"
            >
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">shopcode</h1>
          </div>

          <div>
            <button className="relative">
              <img
                src="/images/avt.jpg"
                alt="avatar"
                className="w-12 h-12 rounded-full hover:cursor-pointer"
                onClick={() => setOpenAccountMenu(!openAccountMenu)}
              />
              {openAccountMenu && (
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
  );
};

export default Layout;
