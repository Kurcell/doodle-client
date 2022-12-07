import React, { useState, useEffect } from "react";
import Post from "../components/Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SOCIALS + "/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
}

export default Feed;
