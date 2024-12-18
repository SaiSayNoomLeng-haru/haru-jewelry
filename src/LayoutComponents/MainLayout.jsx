import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function MainLayout() {
  return (
    <div>
      <Header />
        <main >
            <Outlet />
        </main>
      <Footer />
    </div>
  )
}
