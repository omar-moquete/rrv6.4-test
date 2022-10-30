import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";
import NewPostPage from "./pages/NewPost";
import PostDetailPage from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<p>An error has occurred.</p>}
      element={<RootLayout />}
    >
      <Route path="/" element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        {/* When this route is executed, first the loader function is called, then <BlogPostsPage> is rendered. The returned value from the loader function is made available when <BlogPostsPage> is being rendered via the useLoaderData() hook from RRv6.4.  If the loader function returns a promise, the element will wait for this promise to be settled before rendering.*/}

        {/* "index" means that this route will become active when "/blog" is active */}

        {/* "errorElement": When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route error Element>) and the error made available with useRouteError. */}
        <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />

        <Route path=":id" element={<PostDetailPage />} />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
