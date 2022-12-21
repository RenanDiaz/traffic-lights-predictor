import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';
import { Layout } from './components/Layout';
import { NewTrafficLight } from './components/NewTrafficLight';
import { TrafficLight } from './components/TrafficLight';
import { TrafficLights } from './components/TrafficLights';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'lights',
        element: <TrafficLights />,
      },
      {
        path: 'lights/:id/view',
        element: <TrafficLight />,
      },
      {
        path: 'lights/new',
        element: <NewTrafficLight />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
