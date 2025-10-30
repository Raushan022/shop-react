import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../utils/firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [session, setSession] = useState(null);
  const [accountMenu, setAccountMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
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

  if (session === null)
    return (
      <div className="bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center">
        <span className="relative flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-sky-500"></span>
        </span>
      </div>
    );

  return (
    <>
      <div>
        <nav className="shadow-lg bg-slate-50 sticky top-0 left-0 z-50">
          <div className="w-10/12 mx-auto flex items-center justify-between">
            <img src="/images/logo.jpg" alt="logo" className="w-28" />

            <button
              className="md:hidden"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <i className="ri-menu-3-fill text-2xl"></i>
            </button>

            <ul className="md:flex gap-4 items-center hidden z-50">
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

              {session && (
                <button
                  className="relative"
                  onClick={() => setAccountMenu(!accountMenu)}
                >
                  <img
                    src="/images/avt.jpg"
                    alt="profile_pic"
                    className="w-10 h-10 rounded-full"
                  />
                  {accountMenu && (
                    <div className="flex flex-col items-start animate__animated animate__fadeIn w-[150px] py-3 bg-white absolute top-12 right-0 shadow-xl z-50">
                      <Link
                        to="/profile"
                        className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        <i className="ri-user-line mr-2"></i>
                        My Profile
                      </Link>

                      <Link
                        to="/cart"
                        className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      >
                        <i className="ri-shopping-cart-line mr-2"></i>
                        Cart
                      </Link>

                      <button
                        className="w-full text-left px-3 py-2 hover:bg-gray-100"
                        onClick={() => signOut(auth)}
                      >
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  )}
                </button>
              )}
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
