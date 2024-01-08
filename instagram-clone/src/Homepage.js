import React from 'react'
import "./Homepage.css"
import Sidenav from './components/navigation/Sidenav.js'
import Timeline from './components/timeline/Timeline.js'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage_navbar'>
            <Sidenav />
        </div>
        <div className='homepage_timeline'>
            <Timeline />
        </div>
    </div>
  )
}

export default Homepage