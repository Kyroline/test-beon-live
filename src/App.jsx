import { useState } from 'react'
import { ModalProvider } from './contexts/ModalContext'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './routes/routes'

const App = () => {
    return (
        <ModalProvider>
            <RouterProvider router={router} />
        </ModalProvider>
    )
}

export default App
