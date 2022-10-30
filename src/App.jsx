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
        {/* When this route is executed, first the loader function is called, then <BlogPostsPage> is rendered. The returned value from the loader function is made available when <BlogPostsPage> is being rendered via the useLoaderData() hook from RRv6.4. 
        
        Important note: If the loader function returns a promise, the data that will be returned from useLoaderData() is the data to which the promise resolves to. In other words, the result of calling the loader function is awaited by RRv6.4 before rendering by default.*/}

        {/* "index" means that this route will become active when "/blog" is active */}

        {/* "errorElement": When exceptions are thrown in loaders, actions, or component rendering, instead of the normal render path for your Routes (<Route element>), the error path will be rendered (<Route error Element>) and the error made available with useRouteError. */}

        {/* The loader can be seen as the GET part of a HTTP request. It can make the API call and make the data available in the component that will be rendered when this data arrives. */}
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
