import {
  createBrowserRouter,
  RouterProvider
} from 'react-router'
import { lazy, Suspense } from 'react'
import './App.css'
import MainLayout from './LayoutComponents/MainLayout';

// Lazy Components
const LoadingSpinner = lazy(() => import('./UtilityComponents/LoadingSpinner'));
const Account = lazy(() => import('./Pages/Account'));
const Home = lazy(() => import('./Pages/Home'));
const Catalogue = lazy(() => import('./Pages/Catalogue'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const Blogs = lazy(() => import('./Pages/Blogs'));
const BlogDetail = lazy(() => import('./Pages/BlogDetail'));
const Cart = lazy(() => import('./Pages/Cart'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const FAQ = lazy(() => import('./Pages/FAQ'));
const ForgotPassword = lazy(() => import('./Pages/ForgotPassword'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const SignIn = lazy(() => import('./Pages/SignIn'));
const SignUp = lazy(() => import('./Pages/SignUp'));
const Wishlist = lazy(() => import('./Pages/Wishlist'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'my-account',
        element: <Account />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'blogs',
        element: <Blogs />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'catalogue',
        element: <Catalogue />
      },
      {
        path: 'contact-us',
        element: <ContactUs />
      },
      {
        path: 'faq',
        element: <FAQ />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />
      },
      {
        path: 'catalogue/:id',
        element: <ProductDetails />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
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
