import React, { Suspense } from 'react';
import { getAllPosts } from '../lib/api';

const page = async () => {
  const post = await getAllPosts();

  return (
    <div>
      <h1>We will get all posts </h1>
      <p>{post?.title}</p>
    </div>
  );
};

export default page;
