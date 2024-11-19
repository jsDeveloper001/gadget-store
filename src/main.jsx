import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import FirebaseAuthProvider from './Services/FirebaseAuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
)
