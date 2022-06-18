import React from 'react'
import { Route, Routes } from 'react-router'
import { CountryWiseDashboardRoute } from './CountryWiseDashboardRoute'
import { HomeRoute } from './HomeRoute'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/Country' element={<CountryWiseDashboardRoute />} />
        <Route path='/' element={<HomeRoute />} />
      </Routes>
    </>
  )
}
