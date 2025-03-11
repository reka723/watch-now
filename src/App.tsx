import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ContactUsPage, HomePage, OrdersPage, ProductsPage } from './pages'
import { loader as homeLoader } from './pages/Home'
import PageLayout from './components/PageLayout'


const router = createBrowserRouter([{
  path: '/',
  element: <PageLayout />,
  children: [
    { path: '/', element: <HomePage />, loader: homeLoader },
    { path: '/products', element: <ProductsPage />, loader: homeLoader },
    { path: '/orders', element: <OrdersPage />, loader: homeLoader },
    { path: '/contact', element: <ContactUsPage />, loader: homeLoader },
  ]
}])

function App() {
  return <RouterProvider router={router} />
}

export default App
