import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BBDetails from './Components/b&BDetails/BBDetails.jsx'
import App from './App.jsx'
import './index.css'
import Admin from './Components/admin/Admin.jsx'
import CustomTabPanel from './Components/tabs/Tabs.jsx'
import Edit from './Components/edit/Edit.jsx'
import OrderList from './Components/orderList/OrderList.jsx'
import AddBB from './Components/addB&B/AddBB.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error app</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error login</div>,
    children: [
      {
        path: 'details',
        element: <BBDetails />,
        errorElement: <div>error B&B details not found</div>
      },
      {

        path: 'edit',
        element: <Edit />,
        errorElement: <div>error edit not found</div>
      },
      {
        path: 'orderList',
        element: <OrderList />,
        errorElement: <div>error orderList not found</div>
      },{
        path: 'addBB',
        element: <AddBB />,
        errorElement: <div>error addBB for rent not found</div>
      }]
  }
  // {
  //   path: '/login/admin',
  //   element: <Admin />,
  //   errorElement:<div>error admin</div>,
  // }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
