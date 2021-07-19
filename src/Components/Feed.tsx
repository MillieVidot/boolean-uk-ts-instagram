import React, { useEffect, useState } from "react"
import PostListItem from "./PostListItem"
import { useStore } from "./Store"

function Feed() {
  const users = useStore(store => store.users)
  const posts = useStore(store => store.posts)

  return (
    <section className="feed">
      <ul className="stack">
        {posts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
export default Feed
