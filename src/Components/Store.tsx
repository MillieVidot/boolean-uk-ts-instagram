import create from "zustand"
import { User, Post, NewPost } from "../Types"

type Store = {
  users: User[]
  posts: Post[]
  fetchUsers: () => void
  fetchPosts: () => void
  postToServer: (arg: NewPost) => void
}

export const useStore = create<Store>((set, get) => ({
  users: [],
  posts: [],
  fetchUsers: () => {
    fetch("http://localhost:4000/users")
      .then(resp => resp.json())
      .then(data => set(state => ({ users: data })))
  },
  fetchPosts: () => {
    fetch("http://localhost:4000/posts")
      .then(resp => resp.json())
      .then(data => set(state => ({ posts: data })))
  },
  postToServer: () => {
    function postToServer(newPost: NewPost) {
      fetch("http://localhost:4000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      }).then(data => set(state => ({ posts: data })))
    }
  },
}))
