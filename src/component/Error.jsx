import React from 'react'

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found</p>
      <a href="/" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Home
      </a>
    </div>
  )
}

export default Error 