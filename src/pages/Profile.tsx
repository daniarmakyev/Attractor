import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getUser, updatetUser } from "../store/user/user.action";
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
    <div className="relative container h-full flex items-center justify-center z-[1] ">
      <div className="container-blur p-4">
        {user ? (
          <div>
            <div className="   flex justify-between">
              <div>
                <p className="mt-2">Логин: {user.login}</p>
                <p className="mt-2">
                  Электронная почта: {user.email || "Не указана"}
                </p>

                <a
                  href={user.html_url}
                  className="mt-2 text-blue-500 underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Перейти на профиль
                </a>
              </div>
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
              className="flex flex-col mt-2 justify-center items-center gap-3"
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
                Сохранить
              </button>
            </form>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Profile;
