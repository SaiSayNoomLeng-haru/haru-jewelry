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
const Career = lazy(() => import('./Pages/Career'))
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
const ErrorBoundary = lazy(() => import('./Components/ErrorBoundary'));
const AuthErrorBoundary = lazy(() => import('./Components/AuthErrorBoundary'));

// loaders
import { loader as HomePageLoader } from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: HomePageLoader,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'profile',
        element: <Account />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'about-us',
        element: <AboutUs />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'blogs',
        element: <Blogs />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'blogs/:id',
        element: <BlogDetail />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'catalogue',
        element: <Catalogue />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'faq',
        element: <FAQ />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'catalogue/:id',
        element: <ProductDetails />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'sign-in',
        element: <SignIn />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'sign-up',
        element: <SignUp />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
        errorElement: <AuthErrorBoundary />
      },
      {
        path: 'career',
        element: <Career />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  
])

function App() {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
