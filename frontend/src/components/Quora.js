import React from 'react'
import Feed from './Feed'
import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import Widget from './Widget'
import "./css/Quora.css";
// import Post from './Post'

function Quora() {
  return (
    <div className='quora'>
      <QuoraHeader />
    
      <div className='quora__contents'>
        <div className='quora__content'>
          <Sidebar />
          <Feed />
          
          <Widget />

        </div>
      </div>
    </div>
      )
}

export default Quora
