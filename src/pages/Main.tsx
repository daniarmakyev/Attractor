import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {  useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getAccesToken } from "../store/user/user.action";
import mainBg from "../kit/assets/image/blured-bg.svg";
import githubLogo from "../kit/assets/image/github-mark.png";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("github_access_token");
  const navigate = useNavigate();

  const { loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (code) {
      dispatch(getAccesToken(code))
    }
  }, [code, dispatch, navigate]);

  return (
    <div className="relative bg-welcomeMainBg text-white h-screen max-h-screen overflow-hidden">
      <img
        src={mainBg}
        alt="blured-background-image"
        className="absolute inset-0 w-full h-screen z-0"
      />
      <div className="relative container h-full flex items-center justify-center z-[1]">
        <div className="w-80 rounded-xl backdrop-blur-md bg-neutral-500/30 border border-neutral-400 p-6 mx-auto overflow-y-auto max-h-[80vh]">
          {loading ? (
            <div><LoadingSpinner/></div>
          ) : (
            <>
              {error && (
                <div className="text-red-400 mb-4 text-center">{error}</div>
              )}
              <a
                href="http://localhost:3002/auth/github"
                className="mx-auto border border-solid border-neutral-700 backdrop-blur-3xl bg-neutral-100 text-neutral-900 p-3 rounded-xl flex justify-center items-center gap-1 hover:bg-gray-300 transition"
              >
                Войти с помощью
                <img src={githubLogo} alt="github-icon" className="max-w-4" />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
