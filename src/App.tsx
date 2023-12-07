import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Home } from './_root/Pages'
import RootLayout from './_root/RootLayout'
import './globals.css'
import {Routes, Route} from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"


function App() {

  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SignInForm/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
        </Route>


      </Routes>
      <Toaster/>
    </main>
  )
}

export default App
