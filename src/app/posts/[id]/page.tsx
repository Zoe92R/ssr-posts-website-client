import React from "react";

async function getPost(postId: string) {
  try {
    const postResponse = await fetch(
      `http://127.0.0.1:8000/get_post?id=${postId}`,
      {
        cache: "force-cache",
      }
    );
    if (!postResponse.ok) {
      throw new Error("Failed to fetch post.");
    }
    console.log("Refetching post");
    return postResponse.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export default async function SinglePost({ params, searchParams }: any) {
  const { id } = params;

  // Ensure id is not null before fetching
  if (!id) {
    return <div>Loading...</div>;
  }

  const post = (await getPost(id)).data;

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
