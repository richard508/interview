import React from "react"
import "./App.css"
import UserPage from "./features/users/UserPage"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UserPage />
      </header>
    </div>
  )
}

export default App
