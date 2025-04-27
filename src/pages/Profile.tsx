import React, { useEffect, useState } from "react";
import mainBg from "../kit/assets/image/blured-bg.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getUser } from "../store/user/user.action";

const Profile = () => {
  const dispatch = useAppDispatch()
  const {user} = useAppSelector((state) => state.users)
  useEffect(() => {
    dispatch(getUser())
  },[dispatch])
  if(user){
    console.log(user);
    
  }
  return (
    <div className="relative bg-welcomeMainBg text-white h-screen max-h-screen overflow-hidden">
      <img
        src={mainBg}
        alt="blured-background-image"
        className="absolute inset-0 w-full h-screen z-0"
      />
      <div className="relative container h-full flex items-center justify-center z-[1]">
        <div className="w-80 rounded-xl backdrop-blur-md bg-neutral-500/30 border border-neutral-400 p-6 mx-auto overflow-y-auto max-h-[80vh]"></div>
      </div>
    </div>
  );
};

export default Profile;
