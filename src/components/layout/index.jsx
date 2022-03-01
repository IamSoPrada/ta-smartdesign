import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
const Layout = () => {
  return (
	<div className='flex flex-col h-screen justify-between'>
		<Header />
		<div className='flex-grow'>
			<Outlet />
		</div>
		<Footer />
	</div>
  )
}

export default Layout

