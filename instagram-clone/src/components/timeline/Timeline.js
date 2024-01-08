import React from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions.js'

function Timeline() {
  return (
    <div className='timeline' >
      <div className='timeline_left'>Timeline</div>
      <div children="timeline_right"><Suggestions/></div>
    </div>
  )
}

export default Timeline