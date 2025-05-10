import { Outlet } from 'react-router-dom'
import Header, { SearchContext } from './component/Header'
import './App.css'
import { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, isSearching, setIsSearching }}>
      <div className="app">
        <Header />
        <main className="main-container">
          <Outlet />
        </main>
      </div>
    </SearchContext.Provider>
  )
}

export default App
