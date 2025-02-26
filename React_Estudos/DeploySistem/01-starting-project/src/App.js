import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import { lazy, Suspense } from 'react';
import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
const PostPage = lazy(() => import('./pages/Post'))
import RootLayout from './pages/Root';
const BlogPage = lazy(() => import('./pages/Blog'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true, element: (
              <Suspense fallback={<p>Loading...</p>}>const storedDate = new Date(localStorage.getItem('expiration'));
                <BlogPage />
              </Suspense>
            ),
            loader: (meta) => import('./pages/Blog').then(module => module.loader(meta))
          },
          { path: ':id', element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>, loader: import('./pages/Post').then(module => module.loader) },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
