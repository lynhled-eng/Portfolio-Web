import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PersonalBrand } from "./pages/PersonalBrand";
import { FeaturedProjects } from "./pages/FeaturedProjects";
import { CaseStudyAnalytics } from "./pages/CaseStudyAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "brand", Component: PersonalBrand },
      { path: "projects", Component: FeaturedProjects },
      { path: "analytics", Component: CaseStudyAnalytics },
    ],
  },
]);
