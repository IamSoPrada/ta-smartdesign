import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <section className="relative w-full px-8 text-gray-700 bg-white body-font">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <Link to="/" className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">SmartDesign.</Link>
    </div>
        <nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <Link to='/' className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }">
                <span className="block">Главная</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                    <span x-show="hover" className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" />
                </span>
            </Link>
            <Link to='products' className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }">
                <span className="block">Товары</span>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                    <span x-show="hover" className="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" />
                </span>
            </Link>
            
        </nav>     
    </section>

  )
}

export default Header