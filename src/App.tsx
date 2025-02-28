import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, LandingPage } from './pages'
import { loader as homeLoader } from './pages/Home'
import { loader as landingLoader } from './pages/Landing'
import { action as landingAction } from './components/Login'
import PageLayout from './components/PageLayout'


const router = createBrowserRouter([{
  path: '/',
  element: <PageLayout />,
  children: [
    { path: '/', element: <LandingPage />, loader: landingLoader, action: landingAction },
    { path: '/home', element: <HomePage />, loader: homeLoader },
  ]
}])

function App() {
  return <RouterProvider router={router} />
}

export default App
