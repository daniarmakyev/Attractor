import React, { useActionState, useEffect } from "react";
import mainBg from "../kit/assets/image/blured-bg.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getUser, updatetUser } from "../store/user/user.action";
import { User } from "../helpers/types";
import ProfileInput from "../components/ProfileInput";
import LoadingSpinner from "../components/LoadingSpinner";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);
  const [form, setForm] = React.useState({
    name: user?.name || "",
    company: user?.company || "",
    bio: user?.bio || "",
    location: user?.location || "",
  });

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        company: user.company || "",
        bio: user.bio || "",
        location: user.location || "",
      });
    }
  }, [user]);

  function handleInputChange(key: string, value: string) {
    setForm((prevForm) => ({
      ...prevForm,
      [key]: value,
    }));
  }

  function handelSubmit() {
    console.log(form);
    dispatch(updatetUser(form));
    dispatch(getUser());
  }

  return (
    <div className="relative bg-welcomeMainBg text-white h-screen max-h-screen overflow-hidden">
      <img
        src={mainBg}
        alt="blured-background-image"
        className="absolute inset-0 w-full h-screen z-0 b"
      />
      <div className="relative container h-full flex items-center justify-center z-[1]">
        <div className="w-[90vw] h-[90vh] rounded-xl backdrop-blur-md bg-neutral-500/30 border border-neutral-400 px-6 pt-2 mx-auto overflow-y-auto">
          {user ? (
            <div>
              <div className=" mx-auto w-fit">
                <img
                  src={user.avatar_url || user.gravatar_id}
                  alt="Аватар"
                  className="w-32 h-32 rounded-full object-cover border-2 border-white"
                />
              </div>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  handelSubmit();
                }}
                className="flex flex-col mt-2 justify-center items-center"
              >
                {Object.entries(form).map(([key, value]) => (
                  <ProfileInput
                    key={key}
                    onChange={handleInputChange}
                    value={value}
                    placeholder={key}
                    name={key}
                  />
                ))}

                <button
                  type="submit"
                  className="mt-4  border border-white w-fit p-2 rounded-lg"
                >
                  Edit
                </button>
              </form>

              <p className="mt-2">
                <strong>Логин:</strong> {user.login}
              </p>
              <p className="mt-2">
                <strong>Электронная почта:</strong> {user.email || "Не указана"}
              </p>

              <a
                href={user.html_url}
                className="mt-4 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти на профиль
              </a>
            </div>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
