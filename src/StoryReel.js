import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="title1"
      />
      <Story
        image="https://picsum.photos/200/300"
        profileSrc="https://picsum.photos/200/300"
        title="title2"
      />
      <Story
        image="https://picsum.photos/100/200"
        profileSrc="https://picsum.photos/200/300"
        title="title3"
      />
      <Story
        image="https://picsum.photos/100/200"
        profileSrc="https://picsum.photos/200/300"
        title="title4"
      />
      <Story
        image="https://picsum.photos/100/200"
        profileSrc="https://picsum.photos/200/300"
        title="title5"
      />
    </div>
  )
}

export default StoryReel
