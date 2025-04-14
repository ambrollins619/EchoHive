import React, { useEffect } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import Signup from './pages/Signup'
import VerifyCode from './pages/VerifyCode'
import GlobalExplore from './pages/GlobalExplore'
import MainLayout from './layouts/MainLayout'
import DripsPage from './pages/DripsPage'
import { ModalProvider } from './context/modalContext'
import PostPage from './pages/PostPage'
import ProfilePages from './pages/ProfilePages'
import ProfileSection from './pages/ProfileSection'
import EditProfilePage from './pages/EditProfilePage'
import NoRightSidebarLayout from './layouts/NoRightSidebarLayout'
import NotificationsSettings from './components/NotificationsSettings'
import ChangePassword from './components/ChangePassword'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import { ProtectedRoute, GuestRoute } from './components/AuthRoute';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './features/auth/authSlice'
import { isTokenExpired } from './utils/token'

const App = () => {

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  // Check token on initial render
  useEffect(() => {
    if (token && isTokenExpired(token)) {
      dispatch(logout());
    }
  }, [dispatch, token]); // Empty dependency array ensures this runs only once on mount



  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route element={<GuestRoute />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Route>

        {/* Different from other two, when user is auth. but not verified */}
        <Route path='/verify' element={<VerifyCode />} />

        {/* Private Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={
            <ModalProvider>
              <MainLayout />
            </ModalProvider>
          }>
            <Route path='explore/global/*' element={<GlobalExplore />} />
            <Route path='explore/college/*' element={<GlobalExplore />} />
            <Route path='profile/:username/' element={<ProfilePages />} >
              <Route path='likes' element={<ProfileSection />} />
              <Route path='posts' element={<ProfileSection />} />
              <Route path='comments' element={<ProfileSection />} />
            </Route>
            <Route path='drips/*' element={<DripsPage />} />
            <Route path='posts/:postId' element={<PostPage />} />
          </Route>
          <Route path='/' element={<NoRightSidebarLayout />} >
            <Route path='settings/edit' element={<EditProfilePage />} />
            <Route path='settings/notifications' element={<NotificationsSettings />} />
            <Route path='settings/password' element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App