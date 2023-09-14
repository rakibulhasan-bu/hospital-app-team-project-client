import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './routes/indexRouter'
import './i18n'
import { Provider } from 'react-redux'
import Loading from './pages/loading/Loading';
import { store } from './redux/store';
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <Toaster position="top-right" />
          <RouterProvider router={router} />
        </Provider>
      </Suspense>
    </NextUIProvider>
  </React.StrictMode>,
)
