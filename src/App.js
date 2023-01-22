import "./App.scss";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AllTecherHome from "./components/allTeacher/AllTecherHome";
import LandingHome from "./components/landingPage/LandingHome";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const user = true;
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingHome />,
        },
        {
          path: "/teacher",
          element: (
            <ProtectedRoute>
              <AllTecherHome />,
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
