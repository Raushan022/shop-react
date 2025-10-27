import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../utils/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Contact us",
      href: "/contact-us",
    },
  ];
  return (
    <>
      <div>
        <nav className="shadow-lg bg-slate-50 sticky top-0 left-0">
          <div className="w-10/12 mx-auto flex items-center justify-between">
            <img src="/images/logo.jpg" alt="logo" className="w-28" />

            <button
              className="md:hidden"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <i className="ri-menu-3-fill text-2xl"></i>
            </button>

            <ul className="md:flex gap-4 items-center hidden">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {!session && (
                <>
                  <Link
                    to="/login"
                    className="block py-6 text-center hover:bg-blue-600 w-[100px] hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-blue-600 text-white py-2 px-8 text-md rounded block text-center hover:bg-rose-600 hover:text-white"
                  >
                    SignUp
                  </Link>
                </>
              )}

              {session && <p>logged in</p>}
            </ul>
          </div>
        </nav>

        <div>{children}</div>

        <footer className="bg-orange-400 py-16">
          <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
            <div>
              <h1 className="text-white text-2xl font-semibold mb-3">
                Website Links
              </h1>
              <ul className="space-y-2 text-gray-50">
                {menus.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h1 className="text-white text-2xl font-semibold mb-3">
                Follow us
              </h1>
              <ul className="space-y-2 text-gray-50 flex flex-col">
                <Link>Facebook</Link>
                <Link>Instagram</Link>
                <Link>Twitter</Link>
                <Link>Linkedin</Link>
                <Link>Youtube</Link>
              </ul>
            </div>

            <div className="mr-8">
              <h1 className="text-white text-2xl font-semibold mb-3">
                Brand details
              </h1>
              <p className="text-gray-200 mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi quas praesentium fuga a ex fugiat dicta sit molestias
                in, quod sapiente nostrum. Nisi ducimus .
              </p>
              <img src="/images/logo.jpg" alt="logo" className="w-28" />
            </div>

            <div>
              <h1 className="text-white text-2xl font-semibold mb-3">
                Contact us
              </h1>
              <form className="space-y-3.5">
                <input
                  type="text"
                  name="fullname"
                  className="bg-white w-full rounded p-2"
                  placeholder="Your name"
                  required
                />
                <input
                  type="text"
                  name="email"
                  className="bg-white w-full rounded p-2"
                  placeholder="Enter email id"
                  required
                />
                <textarea
                  required
                  name="message"
                  className="bg-white w-full rounded p-3"
                  placeholder="message"
                  rows={3}
                />

                <button className="bg-gray-800 text-white py-2 px-5 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </footer>

        <aside
          className="md:hidden overflow-hidden bg-slate-900 shadow-lg fixed top-0 left-0 h-full z-50"
          style={{
            width: openSidebar ? 250 : 0,
            transition: "0.3s",
          }}
        >
          <div className="flex flex-col gap-6 p-8">
            {menus.map((item, index) => (
              <Link to={item.href} key={index} className="text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
};

export default MainLayout;
