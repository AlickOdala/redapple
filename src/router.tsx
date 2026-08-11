import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useEndpointData } from "../appdata/endpoint";
import Layout from "./layouts/layout";
import ErrorPage from "./pages/errorPage";
import { Loading } from "./common/lui/lixmaterial";

const HomePage = lazy(() => import("./pages/home/homepage"));
const AboutPage = lazy(() => import("./pages/about/about"));
const GalleryPage = lazy(() => import("./pages/galley/gallery"));
const ContactPage = lazy(() => import("./pages/contact/contact"));
const SettingPage = lazy(() => import("./common/sections/settings"));
//const FQSPages = lazy(() => import("./common/sections/rfqs"));
const BookingPage = lazy(() => import("./common/sections/booking"));
const FeedbackPage = lazy(() => import("./common/sections/feedback"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const data = await useEndpointData();
      return data;
    },
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {path: "about", element: <AboutPage />},
      {path: "gallery", element: <GalleryPage />},
      {path: "contact",element: <ContactPage />},
      {path: "booking",element: <BookingPage />},
      {path: "feedback",element: <FeedbackPage />},
      { path: "setting", element: <SettingPage /> },
      //{ path: "fqs", element: <FQSPage /> },
    ],
  },
]);
