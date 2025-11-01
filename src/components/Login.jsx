import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../utils/firebase-config";

const auth = getAuth(firebaseAppConfig);

const Login = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async (e) => {
    try {
      e.preventDefault();
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
      <img
        src="/images/signup.jpg"
        className="w-full md:h-full h-24 object-cover"
      />
      <div className="flex flex-col md:p-16 p-8">
        <h1 className="text-4xl font-bold">Signin</h1>
        <p className="text-lg text-gray-600">Enter profile details to login</p>
        <form className="mt-8 space-y-6" onSubmit={login}>
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1">Email id</label>
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="example@mail.com"
              className="p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="font-semibold text-lg mb-1">Password</label>
            <input
              required
              type={passwordType}
              name="password"
              onChange={handleChange}
              placeholder="********"
              className="p-3 border border-gray-300 rounded"
            />
            <button
              onClick={() =>
                setPasswordType(
                  passwordType === "password" ? "text" : "password"
                )
              }
              type="button"
              className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-600"
            >
              {passwordType === "password" ? (
                <i className="ri-eye-line"></i>
              ) : (
                <i className="ri-eye-off-line"></i>
              )}
            </button>
          </div>

          <button className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600">
            Login
          </button>
        </form>
        <div className="mt-2">
          Don`t have an account ?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
