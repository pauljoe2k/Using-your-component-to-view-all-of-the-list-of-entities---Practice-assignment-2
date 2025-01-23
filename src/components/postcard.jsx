import React from "react";
import LikeButton from "./likebutton";


const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.profilePicture} alt={`${post.username}'s profile`} className="profile-picture" />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
