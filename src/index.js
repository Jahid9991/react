import React from 'react'
import ReactDom from 'react-dom'
import People from './People'


function App(){
  return(
    <section>
      <People/>
    </section>
  )
}


ReactDom.render(<App/>, document.getElementById('root'))
