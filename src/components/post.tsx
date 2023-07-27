"use client";

import { PostT } from "@/types/post.types";
import Link from "next/link";

interface IPost {
  key: string;
  post: PostT;
}

export function Post(props: IPost) {
  const { post } = props;
  return (
    <h1>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </h1>
  );
}
