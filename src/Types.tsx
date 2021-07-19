export type User = {
  id: number
  username: string
  avatar: string
}

type Image = {
  src: string
  alt: string
}

export type Comment = {
  id: number
  content: string
  userId: number
  postId: number
}

export type Post = {
  id: number
  title: string
  content: string
  image: Image
  likes: number
  userId: number
  comments: Comment[]
}

export type NewPost = {
  title: string
  content: string
  image: Image
  likes: number
  userId: number
  // comments: Comment[];
}
