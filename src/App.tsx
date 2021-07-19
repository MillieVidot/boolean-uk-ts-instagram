import React, { useState, useEffect } from "react"
import "../src/styles/reset.css"
import "../src/styles/index.css"
import HeaderSection from "./Components/HeaderSection"
import MainSection from "./Components/MainSection"
import { Post } from "./Types"
import { useStore } from "./Components/Store"

function App() {
  // const [posts, setPosts] = useState<Post[]>([])

  const fetchUsers = useStore(store => store.fetchUsers)
  const fetchPosts = useStore(store => store.fetchPosts)

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="App">
      <div id="root">
        <header>
          <HeaderSection />
        </header>
        <main>
          <MainSection />
        </main>
      </div>
    </div>
  )
}

export default App
