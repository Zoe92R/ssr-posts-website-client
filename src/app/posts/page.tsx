import React from "react";
import { Post } from "@/components/post";
import styles from "../posts/posts.module.css";
import { PostT } from "@/types/post.types";

async function getPosts() {
  try {
    const postsResponse = await fetch("http://127.0.0.1:8000/get_posts", {
      cache: "force-cache",
    });
    if (!postsResponse.ok) {
      throw new Error("Failed to fetch posts.");
    }
    console.log("Refetching posts");
    return postsResponse.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export default async function Page() {
  const posts = (await getPosts()).data;

  return (
    <div className={styles.posts_container}>
      <div className={styles.posts_title}>Posts</div>
      <div className={styles.posts_list}>
        {posts.map((post: PostT) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
