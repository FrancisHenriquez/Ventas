import React from 'react'
import Router, { Route } from 'router'
import {} from "../pages/loginPage"

export const router = () => {
  return (
   <Router>
        <Routes>
            <Route path = "/loginPage" element = {
                <loginPage />

            }>

            </Route>
        </Routes>
   </Router>
  )
}
