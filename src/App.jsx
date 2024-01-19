import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";

const App = () => {
  return (
    <div className="globalBG min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
export default App;
