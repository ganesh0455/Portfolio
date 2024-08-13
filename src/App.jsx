import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import JavaScriptDashboard from "./components/AppBody/Content/JavaScript";
import Motivation from "./components/AppBody/Content/Motivation";
import ReactdashBoard from "./components/AppBody/Content/React";
import ReactMinorProjects from "./components/AppBody/Content/React/MinorProjects";
import JsMinorProjects from "./components/AppBody/Content/JavaScript/MinorProjects";
import JsMajorProjects from "./components/AppBody/Content/JavaScript/MajorProjects";
import ExpenseTracker from "./components/AppBody/Content/React/MinorProjects/1.ExpenseTracker";
import ReactMajorProjects from "./components/AppBody/Content/React/MajorProjects";
import SwiggyDashboard from "./components/AppBody/Content/React/MajorProjects/Swiggy";
import YoutubeDashboard from "./components/AppBody/Content/React/MajorProjects/Youtube";
import NetflixDashboard from "./components/AppBody/Content/React/MajorProjects/Netflix";
import TicTacToeDashboard from "./components/AppBody/Content/React/MajorProjects/TicTocToe";
import TodoDashboard from "./components/AppBody/Content/React/MajorProjects/Todo";
import SwiggyBody from "./components/AppBody/Content/React/MajorProjects/Swiggy/SBody";
import ReactSkills from "./components/AppBody/Content/React/MinorProjects/2.ReactSkillsAssignment";

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
          path: "/ReactDashboard/minorProjects/ReactSkills/:projectId",
          element: <ReactSkills />
        },
        {
          path: "/ReactDashboard/majorProjects",
          element: <ReactMajorProjects />
        }
      ]
    },
    {
      path: "/ReactDashboard/majorProjects/Swiggy/:projectId",
      element: <SwiggyDashboard />,
      children: [
        {
          path: "/ReactDashboard/majorProjects/Swiggy/:projectId/",
          element: <SwiggyBody />
        }
      ]
    },
    {
      path: "/ReactDashboard/majorProjects/Youtube/:projectId",
      element: <YoutubeDashboard />
    },
    {
      path: "/ReactDashboard/majorProjects/Netflix/:projectId",
      element: <NetflixDashboard />
    },
    {
      path: "/ReactDashboard/majorProjects/TicTocToe/:projectId",
      element: <TicTacToeDashboard />
    },
    {
      path: "/ReactDashboard/majorProjects/ToDos/:projectId",
      element: <TodoDashboard />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}