import { useState } from 'react'
import AddAuthor from './components/AddAuthor';
import AddBooks from './components/AddBooks';
import AddOrders from './components/AddOrders';
function App() {
  

  return (
    <>
    <div style={{ padding: "20px" }}>
      <AddAuthor />
     <AddBooks />
     <AddOrders />
    </div>
    </>
  )
}

export default App
