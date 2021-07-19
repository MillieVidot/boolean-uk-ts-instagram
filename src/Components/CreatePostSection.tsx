import React from "react"
import { NewPost } from "../Types"
import { useStore } from "./Store"

function CreatePostSection() {
  const postToServer = useStore(store => store.postToServer)

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const targetForm = event.target as HTMLFormElement
    console.log("targetForm.title...", targetForm.title)
    const altInput = targetForm.title as HTMLInputElement

    const newPost: NewPost = {
      image: {
        src: targetForm.image.value,
        alt: targetForm.title.value,
      },
      title: targetForm.title.value,
      content: targetForm.content.value,
      userId: 1,
      likes: 0,
    }
    postToServer(newPost)
    console.log("newPost is", newPost)
    targetForm.reset()
  }

  // we need to make post fetch request to put the above on the server.

  return (
    <>
      <section className="create-post-section">
        <form onSubmit={handleSubmit} id="create-post-form" autoComplete="off">
          <h2>Create a post</h2>
          <label htmlFor="image">Image</label>
          <input id="image" name="image" type="text" />
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows="2"
            columns="30"
          ></textarea>
          <div className="action-btns">
            <button id="preview-btn" type="button">
              Preview
            </button>
            <button type="submit">Post</button>
          </div>
        </form>
        {/* <!-- FOR THE CHALLENGE START --> */}
        <div className="post">
          {/* <!-- Go to post.html and scroll down to the preveiw cards --> */}
        </div>
        {/* <!-- FOR THE CHALLENGE END --> */}
      </section>
    </>
  )
}

export default CreatePostSection

// handle change to take all the above values from the inputs

// put them in a fetch post request
// wack em on the page

// function handleSubmit(e) {
//   e.preventDefault;
//   const newPost = {
//     image: {
//       src: e.target.image.value,
//       alt: e.target.image.value,
//     },
//     title: e.target.image.value,
//     content: e.target.image.value,
//     userId: 1,
//     likes: 0,
//   };
//   console.log("newpost", newPost);
// }
