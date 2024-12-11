import {
  createBrowserRouter,
  RouterProvider
} from 'react-router'
import { lazy, Suspense } from 'react'
import './App.css'
import MainLayout from './LayoutComponents/MainLayout';

// Lazy Components
const LoadingSpinner = lazy(() => import('./UtilityComponents/LoadingSpinner'));
const Home = lazy(() => import('./Pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

function App() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
