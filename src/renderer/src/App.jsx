import React from 'react'
import ResourcesComponent from './components/ResourcesComponent'

function App() {
  return (
    <div>
      <h1 className='text-center display-1 text-primary mt-3'>Hello, World!</h1>
      <hr />
      <h2 className='text-center mb-3'>Um boilerplate simples, pra começar a desenvolver qualquer tipo de aplicação web voltado para Desktop</h2>

      <div>
        <ResourcesComponent/>
      </div>

    </div>
  )
}

export default App
