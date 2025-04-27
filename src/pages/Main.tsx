import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { encrypt, useAppDispatch, useAppSelector } from "../helpers/hooks";
import { getAccesToken } from "../store/user/user.action";
import mainBg from "../kit/assets/image/blured-bg.svg";
import githubLogo from "../kit/assets/image/github-mark.png";

const Main = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.users);
  const [logined, setLogined] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("github_access_token");
    if (token) {
      setTimeout(() => {
        setLogined(true);
      }, 200);
    }
  }, []);

  useEffect(() => {
    if (code) {
      const password = process.env.REACT_APP_STATE_CRYPTO_KEY!;
      dispatch(getAccesToken(encrypt(code, password)));
      navigate("/", { replace: true });
    }
  }, [code, dispatch]);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("github_access_token", accessToken);
    }
  }, [accessToken]);

  return (
    <div className="relative bg-welcomeMainBg text-white h-screen max-h-screen overflow-hidden">
      <img
        src={mainBg}
        alt="blured-background-image"
        className="absolute inset-0 w-full h-screen z-0"
      />
      <div className="relative container h-full flex items-center justify-center z-[1]">
        <div
         style={{
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', 
          height: logined ? '80vh' : 'auto', 
        }}
        className={`w-80 rounded-xl backdrop-blur-md bg-neutral-500/30 border border-neutral-400 p-6 mx-auto overflow-y-auto max-h-[80vh] transition-all duration-500 ${
          logined ? "w-[80vw]" : ""
        }`}
        >
          {logined ? (
            <div className="text-center text-white">
              <h2>Вы авторизованы!</h2>
            </div>
          ) : (
            <a
              href="http://localhost:3002/auth/github"
              className="mx-auto border border-solid border-neutral-700 backdrop-blur-3xl bg-neutral-100 text-neutral-900 p-3 rounded-xl flex justify-center items-center gap-1 hover:bg-gray-300 transition"
            >
              Войти с помощью
              <img src={githubLogo} alt="github-icon" className="max-w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
