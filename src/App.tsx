
import React from 'react'
import { createBrowserHistory } from 'history'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Appbar } from './App-bar'
import { OrdersList, AcceptedOrders, Processing, FoodOnTheWay, DeliveredOrderFunction, OrderCancelledFunction, PaymentFailedFunction, RefundFunction, ShedulledFunction, AllOrdersFunction } from './orders-list-component'
import { OrdersDetailFunction } from './OrdersDetail'
import {AddRastaurantFunction} from './AddRastaurant'
import {RastaurantListFunction} from './RastaurantList'
import {BulkImportFunction} from './BulkImport'
import {BulkExportFunction} from './BulkExport'
import {CategoryFunction,SubCategory} from './food-management/FoodManagement'
import {AttributesFunction} from './food-management/Attributes'
import {ListFunction} from './food-management/addonsList'
import {FoodsFunction} from './food-management/foods'
import {FoodsListFunction} from './food-management/foodslist'
import { DeliveryManFunction} from './deliveryManSection/add-delivery-man'
import {FormValidationWithFormik} from './form-validation-with-formil'

// for kacha-bazar 

import {HomePage} from './kacha-bazar/home-page'


export const App = () => {


  

  return (
    <>

     {/* Routes for FOOD-STACK  */}
      {/* <Router >
      <Routes>
          <Route path="/" element={<Appbar />} />
          <Route path="/orders-list/orders-pending"  element={<OrdersList />} />
          <Route path="/orders-list/accepted-orders" element={<AcceptedOrders />} />
          <Route path="/orders-list/processing" element={<Processing />} />
          <Route path="/orders-list/food-on-the-way" element={<FoodOnTheWay />} />
          <Route path="/orders-list/delivered" element={<DeliveredOrderFunction />} />
          <Route path="/orders-list/cancelled" element={<OrderCancelledFunction />} />
          <Route path="/orders-list/payment-failed" element={<PaymentFailedFunction />} />
          <Route path="/orders-list/Refund" element={<RefundFunction/>} />
          <Route path="/orders-list/sheduled" element={<ShedulledFunction />} />
          <Route path="/orders-list/all" element={<AllOrdersFunction />} />
          <Route path="/order-detailes/:id" element={<OrdersDetailFunction />} />
          <Route path="/rastaurant/add-rastaurant" element={<AddRastaurantFunction/>} />
          <Route path="/rastaurant/rastaurant-list" element={<RastaurantListFunction/>} />
          <Route path="/rastaurant/bulk-import" element={<BulkImportFunction/>} />
          <Route path="/rastaurant/bulk-export" element={<BulkExportFunction/>} />
          <Route path="/food-management/category" element={<CategoryFunction/>} />
          <Route path="/food-management/sub-category" element={<SubCategory/>} />
          <Route path="/food-management/bulk-import" element={<BulkImportFunction/>} />
          <Route path="/food-management/bulk-export" element={<BulkExportFunction/>} />
          <Route path="/attributes" element={<AttributesFunction/>} />
          <Route path="/food-management/addons/list" element={<ListFunction/>} />
          <Route path="/food-management/addons/bulk-import" element={<BulkImportFunction/>} />
          <Route path="/food-management/addons/bulk-export" element={<BulkExportFunction/>} />
          <Route path="/food-management/foods/add-new" element={<FoodsFunction/>} />
          <Route path="/food-management/foods/list" element={<FoodsListFunction/>} />
          <Route path="/food-management/foods/bulk-import" element={<BulkImportFunction/>} />
          <Route path="/food-management/foods/bulk-export" element={<BulkExportFunction/>} />
          <Route path="/delivery-man-section/add-delivery-man" element={<DeliveryManFunction/>} />
          <Route path="/delivery-man-section/reviews" element={<FormValidationWithFormik/>} />

      </Routes>

      </Router> */}

      {/* ROUTES FOR KACHA BAZAR APP */}


      <Router>

        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}


