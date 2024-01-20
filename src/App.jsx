import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";

const App = () => {
  return (
    <div className="globalBG min-h-screen  ">
      <Header />
      <div className="px-3 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
};
export default App;
