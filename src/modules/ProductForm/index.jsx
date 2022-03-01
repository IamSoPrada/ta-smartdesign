import React from 'react'

function ProductForm() {
  return (
  <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-center lg:flex-row">
              <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                  <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-2">
                      <h4 className="w-full text-3xl font-bold">Добавление товара</h4>
                      <div className="relative w-full mt-10 space-y-8">
                          <div className="relative">
                              <label className="font-medium text-gray-900">Название</label>
                              <input type="text" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Название товара"/>
                          </div>
                            <div className="relative">
                            <label htmlFor="message" className="font-medium text-gray-900">Описание</label>
                            <textarea id="message" rows="4" className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Добавьте описание..." />
                          </div>
                          <div className="relative">
                              <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Добавить</button>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  )
}

export default ProductForm