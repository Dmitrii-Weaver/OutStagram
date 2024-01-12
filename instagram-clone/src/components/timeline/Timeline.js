import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions.js'
import Post from './posts/Post.js'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "testuser",
      postImage: "https://image.petmd.com/files/styles/863x625/public/2023-09/ferret%20on%20leash.jpg",
      likes: 12,
      time: "1h",
    },
    {
      user: "testuser2",
      postImage: "https://www.treehugger.com/thmb/k3ABS5xysXK2SwnKCgTeuZsi7dg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tame-ferret-157431696-2098d0580ca54325841a5799b6f99449.jpg",
      likes: 145,
      time: "2d",
    },
    {
      user: "nottestuser",
      postImage: "https://ontariospca.ca/wp-content/uploads/2015/01/ferret-1.jpg",
      likes: 1,
      time: "17d",
    },
    {
      user: "qwerty123",
      postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoSHCugZ1a1KZhbT-3XD5L6RW6UQ8kAaeaw&usqp=CAU",
      likes: 1234,
      time: "1m",
    },
  ]);

  return (
    <div className='timeline' >
      <div className='timeline_left'>
        <div className='timeline_posts'>
          {posts.map(post => (
            <Post
              user={post.user}
              image={post.postImage}
              likes={post.likes}
              time={post.time} />
          ))}
        </div>
      </div>
      <div children="timeline_right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline