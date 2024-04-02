import React from 'react'

//Reaproveitamento de estruturas 
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App
