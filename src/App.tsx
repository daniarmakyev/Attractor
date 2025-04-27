import { RouterProvider } from "react-router-dom";
import { router } from "./helpers/routes";
import mainBg from "./kit/assets/image/blured-bg.svg";

function App() {
  return (
    <div className="relative bg-welcomeMainBg text-white h-screen max-h-screen overflow-hidden">
            <img
        src={mainBg}
        alt="blured-background-image"
        className="absolute inset-0 w-full h-screen z-0"
      />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
