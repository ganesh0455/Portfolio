import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import JavaScriptDashboard from "./components/AppBody/Content/JavaScript";
import Motivation from "./components/AppBody/Content/Motivation";
import ReactdashBoard from "./components/AppBody/Content/React";
import ReactMinorProjects from "./components/AppBody/Content/React/MinorProjects";
import JsMinorProjects from "./components/AppBody/Content/JavaScript/MinorProjects";
import JsMajorProjects from "./components/AppBody/Content/JavaScript/MajorProjects";
import ExpenseTracker from "./components/AppBody/Content/React/MinorProjects/ExpenseTracker";

export default function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainDashboard />,
      children: [
        {
          path: "/",
          element: <Navigate to="/motivation" />
        },
        {
          path: "/motivation",
          element: <Motivation />
        },
        {
          path: "/JavascriptDashboard",
          element: <JavaScriptDashboard />,
        },
        {
          path: "/JavascriptDashboard/minorProjects",
          element: <JsMinorProjects />
        },
        {
          path: "/JavascriptDashboard/majorProjects",
          element: <JsMajorProjects />
        },
        {
          path: "/ReactDashboard",
          element: <ReactdashBoard />
        },
        {
          path: "/ReactDashboard/minorProjects",
          element: <ReactMinorProjects />
        },
        {
          path: "/ReactDashboard/minorProjects/ExpencseTracker/:projectId",
          element: <ExpenseTracker />
        },
        {
          path: "/ReactDashboard/majorProjects",
          element: <ReactMinorProjects />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}