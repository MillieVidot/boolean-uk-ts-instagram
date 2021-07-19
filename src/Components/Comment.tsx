import React from "react";
import { Comment, User } from "../Types";
import { useStore } from "./Store";

type CommentProps = {
  comment: Comment;
  // users: User[];
};

function CommentListitem(props: CommentProps) {
  const users = useStore((store) => store.users);

  let commenter: User | undefined = users.find(
    (user) => props.comment.userId === user.id
  );
  //   console.log("this is the commenter", commenter);

  return (
    <div className="post--comment">
      <div className="avatar-small">
        <img src={commenter?.avatar} alt={commenter?.username} />
      </div>
      <p>{props.comment.content}</p>
    </div>
  );
}
export default CommentListitem;
