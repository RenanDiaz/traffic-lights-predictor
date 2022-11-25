import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Layout } from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'test',
        element: <span>Test</span>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
