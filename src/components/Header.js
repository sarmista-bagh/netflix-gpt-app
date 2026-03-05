// src/components/Header.js
import React from "react";
import { LOGO, AVATAR_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                //navigate("/")
            })
            .catch((error) => {
                // navigate("/error")
            });
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //User is signed in, see docs for a list of available properties
                //https://firebase.google.com/docs/refrence/js/auth.user

                const { uid, email, displayName, photoURL } = user;

                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        pthotoURL: photoURL,
                    }));
                navigate("/browse");

            } else {
                //User is signed out
                dispatch(removeUser());
                navigate("/"); //It is my login page
                //navigate("/")  //if my user sign out then i want to navigate him to my mainmain page
            }
        });
        //Unsubscribe when component unmount
        return () => unsubscribe();
    }, []);


    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-black/90 to-transparent px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-sm">

            {/* Logo */}
            <img
                src={LOGO}
                alt="Netflix Logo"
                className="w-28 md:w-40 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => navigate("/")}
            />

            {/* Right Section */}
            {user && (
                <div className="flex items-center gap-6">

                    {/* User Avatar */}
                    <div className="relative group cursor-pointer">
                        <img
                            src={user.photoURL || AVATAR_URL} // Fallback if photoURL missing
                            alt="User Avatar"
                            className="w-9 h-9 rounded-md border border-gray-400 transition-all duration-300 group-hover:border-white"
                        />
                    </div>

                    {/* Sign Out Button */}
                    <button
                        className="text-sm md:text-base font-medium text-white bg-red-600 px-4 py-2 rounded-md 
                            hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-600/40"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;