import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home";
import GlobalNav from "./components/globalNav";
import Todo from "./pages/todo";
import type { ComponentType } from "react";
import Calculator from "./pages/Calculator/Calculator";

function App() {
  const routeArr: Array<{
    path: string;
    pathName: string;
    element: ComponentType;
  }> = [
    {
      path: "/",
      element: Home,
      pathName: "Home",
    },
    {
      path: "/todo",
      element: Todo,
      pathName: "Todo",
    },
    {
      path: "/Calculator",
      element: Calculator,
      pathName: "Calculator",
    },
  ];

  const paths = routeArr.map((e) => {
    return {
      path: e.path,
      pathName: e.pathName,
    };
  });

  return (
    <>
      <GlobalNav paths={paths} />
      <Routes>
        {routeArr.map((path) => {
          return <Route path={path.path} element={<path.element />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
