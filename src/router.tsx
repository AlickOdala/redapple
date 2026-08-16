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
const FQSPage = lazy(() => import("./common/sections/rfqs"));
const BookingPage = lazy(() => import("./common/sections/booking"));
const FeedbackPage = lazy(() => import("./common/sections/feedback"));
const ServicePage = lazy(() => import("./common/sections/services"));

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
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "feedback", element: <FeedbackPage /> },
      { path: "setting", element: <SettingPage /> },
      { path: "/service/:category", element: <ServicePage /> },
      { path: "fqs", element: <FQSPage /> },
    ],
  },
]);
