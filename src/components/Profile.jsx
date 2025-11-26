import React, { useEffect, useState } from "react";
import MainLayout from "./MainLayout";
import firebaseAppConfig from "../utils/firebase-config";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const auth = getAuth(firebaseAppConfig);
const db = getFirestore(firebaseAppConfig);
const storage = getStorage();

const Profile = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    mobile: "",
  });
  const [addressFormValue, setAddressFormValue] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    userId: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(false);
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (session) {
      setFormValue({
        ...formValue,
        fullname: session.displayName,
        mobile: session.phoneNumber ? session.phoneNumber : "",
      });

      //set user id of user when user logins and store in addressFormValue
      setAddressFormValue({
        ...addressFormValue,
        userId: session.uid,
      });

      //fetching address when user logins so that it dont show blank for already filled address
    }
  }, [session]);

  const setProfilePicture = async (e) => {
    const input = e.target;
    const file = input.files[0];
    const filenameArray = file.name.split(".");
    const ext = filenameArray[filenameArray.length - 1];
    const filename = Date.now() + "." + ext;
    const path = `pictures/${filename}`;
    const bucket = ref(storage, path);
    const snapshot = await uploadBytes(bucket, file);
    const url = await getDownloadURL(snapshot.ref);
    await updateProfile(auth.currentUser, {
      photoURL: url,
    });
    setSession({
      ...session,
      photoURL: url,
    });
  };

  const handleFormValue = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const saveProfileInfo = async (e) => {
    e.preventDefault();
    await updateProfile(auth.currentUser, {
      displayName: formValue.fullname,
      phoneNumber: formValue.mobile,
    });
    new Swal({
      icon: "success",
      title: "Profile Saved!!",
    });
  };

  const handleAdressFormValue = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setAddressFormValue({
      ...addressFormValue,
      [name]: value,
    });
  };

  const saveAddress = async (e) => {
    try {
      e.preventDefault();
      await addDoc(collection(db, "addresses"), addressFormValue);
      new Swal({
        icon: "success",
        title: "Address Saved !!",
      });
    } catch (err) {
      new Swal({
        icon: "error",
        title: "Failed !",
        text: err.message,
      });
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
        <div className="flex gap-3">
          <i className="ri-user-line text-4xl"></i>
          <h1 className="text-3xl font-semibold">Profile</h1>
        </div>

        <hr className="my-6" />

        <div className="w-24 h-24 mx-auto relative mb-6">
          <img src="/images/avt.jpg" className="rounded-full w-24 h-24" />
          <input
            type="file"
            accept="image/*"
            className="opacity-0 absolute top-0 left-0 w-full h-full"
            onChange={setProfilePicture}
          />
        </div>

        <form className="grid grid-cols-2 gap-6" onSubmit={saveProfileInfo}>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Fullname</label>
            <input
              required
              name="fullname"
              className="p-2 rounded border border-gray-300"
              onChange={handleFormValue}
              value={formValue.fullname}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Email</label>
            <input
              disabled
              required
              name="email"
              type="email"
              className="p-2 rounded border border-gray-300"
              onChange={handleFormValue}
              value={session?.email || ""}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Mobile</label>
            <input
              required
              name="mobile"
              type="number"
              className="p-2 rounded border border-gray-300"
              onChange={handleFormValue}
              value={formValue.mobile}
            />
          </div>

          <div />

          <button className="px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600">
            <i className="ri-save-line mr-2"></i>
            Save
          </button>
        </form>
      </div>

      <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
        <div className="flex gap-3">
          <i className="ri-link-unlink-m text-4xl"></i>
          <h1 className="text-3xl font-semibold">Delivery Address</h1>
        </div>

        <hr className="my-6" />

        <form className="grid grid-cols-2 gap-6" onSubmit={saveAddress}>
          <div className="flex flex-col gap-2 col-span-2">
            <label className="text-lg font-semibold">Area/Street/Vill</label>
            <input
              required
              name="address"
              type="text"
              onChange={handleAdressFormValue}
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">City</label>
            <input
              required
              name="city"
              type="text"
              onChange={handleAdressFormValue}
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">State</label>
            <input
              required
              name="state"
              type="text"
              onChange={handleAdressFormValue}
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Country</label>
            <input
              required
              name="country"
              type="text"
              onChange={handleAdressFormValue}
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Pincode</label>
            <input
              required
              name="pincode"
              type="number"
              onChange={handleAdressFormValue}
              className="p-2 rounded border border-gray-300"
            />
          </div>

          <button className="px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-green-600">
            <i className="ri-save-line mr-2"></i>
            Save
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Profile;
