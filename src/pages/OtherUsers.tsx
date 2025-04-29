import React, { useState, useEffect, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getUsers } from "../store/user/user.action";
import LoadingSpinner from "../components/LoadingSpinner";

const OtherUsers = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((item) => item.users);

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(getUsers(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  return (
    <div className="container-blur flex flex-col items-center">
      <input
        onChange={handleChange}
        value={query}
        type="text"
        placeholder="search users"
        className="h-fit mt-4 w-52 rounded-md border focus:outline-none px-2 py-1 border-neutral-500 bg-transparent"
      />
      {users && <h3>Общее кол-во {users.total_count}</h3>}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-4">
          {users &&
            users.items.map((user) => (
                // ну по сути всё как тз    :3
              <a href={user.html_url + "?tab=repositories"} className="flex items-center gap-2 py-1">
                <img src={user.avatar_url} alt={user.login} className="w-6 h-6 rounded-full" />
                <span>{user.login}</span>
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default OtherUsers;
