import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Layout } from './components/Layout';
import { NewTrafficLight } from './components/NewTrafficLight';
import { TrafficLights } from './components/TrafficLights';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'list',
        element: <TrafficLights />,
      },
      {
        path: 'new',
        element: <NewTrafficLight />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
