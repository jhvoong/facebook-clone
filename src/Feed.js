import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel"

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={"https://picsum.photos/200/300"}
        message={"message"}
        timestamp={"timestamp"}
        username={"username"}
        image={"https://picsum.photos/200/300"}
      />
      <Post
        profilePic={"https://picsum.photos/200/300"}
        message={"message"}
        timestamp={"timestamp"}
        username={"username"}
        image={"https://picsum.photos/200/300"}
      />
      <Post
        profilePic={"https://picsum.photos/200/300"}
        message={"message"}
        timestamp={"timestamp"}
        username={"username"}
        image={"https://picsum.photos/200/300"}
      />
    </div>
  )
}

export default Feed
