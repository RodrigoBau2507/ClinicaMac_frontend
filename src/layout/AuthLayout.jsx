import { Outlet } from 'react-router-dom'
import HeaderAu from '../components/HeaderAu'

const AuthLayout = () => {
  return (
    <>
      <HeaderAu />
        <main className="container mx-auto md:grid md:grid-cols-1 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>

    </>
  )
};

export default AuthLayout;
