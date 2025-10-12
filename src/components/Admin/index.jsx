import { useState } from "react";

const Admin = () => {
  const [sidebarSize, setSidebarSize] = useState(280);
  return (
    <div>
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
        <nav className="bg-white p-6 shadow">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setSidebarSize(sidebarSize === 280 ? 0 : 280)}
              className="bg-gray-100 hover:bg-indigo-500 hover:text-white w-8 h-8"
            >
              <i className="ri-menu-2-line text-xl"></i>
            </button>
            <h1 className="text-md font-semibold">shopcode</h1>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Admin;
