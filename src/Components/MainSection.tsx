import React from "react"
import CreatePostSection from "./CreatePostSection"
import Feed from "./Feed"
import { useStore } from "./Store"

function MainSection() {
  const users = useStore(store => store.users)

  return (
    <main className="wrapper">
      <section className="create-post-section">
        <CreatePostSection />
      </section>
      <section className="feed">
        <Feed />
      </section>
    </main>
  )
}

export default MainSection
