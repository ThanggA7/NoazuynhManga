import Content from "../components/Layouts/Content/content";
import Info from "../Pages/Info/info";
import Read from "../Pages/Read/read";

const PublicRouter = [
  { path: "/", component: Content },
  { path: "/info/:slug", component: Info },
  { path: "/read/:slug/:id", component: Read },
];

export default PublicRouter;
