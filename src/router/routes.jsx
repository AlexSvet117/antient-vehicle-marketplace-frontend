import { createBrowserRouter } from 'react-router';
import RootLayout from './RootLayout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from '../pages/home/Home.jsx';
import About from '../pages/about/About.jsx';
import Listing from '../pages/listing/Listing.jsx';
import Landing from '../pages/landing/landing.jsx';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Layout wrapping the nested routes
    errorElement: <ErrorPage />, // Fallback for routing errors when not valid route
    children: [
      // Define individual routes for the application
      { index: true, element: <Landing /> },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/listings/:id', element: <Listing /> },
      {path: '/landing', element: <Landing/>}
    ],
  },
]);
