import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // путь поправь под себя

const Profile = () => {
  const user = useSelector((state: RootState) => state.users.user);

  if (!user) {
    return <div className="text-center text-xl mt-10">Вы не авторизованы</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-white">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-neutral-400 mt-2">Добро пожаловать!</p>
    </div>
  );
};

export default Profile;
