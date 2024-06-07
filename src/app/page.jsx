// 'use client';
// import React from 'react';

// import { useSession, signIn, signOut } from 'next-auth/react';

// function page() {
//   const { data: session } = useSession();
//   if (session) {
//     console.log(session.user);
//     return (
//       <>
//         Signed in as {session.user.name} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

// export default page;

import React, { Suspense } from 'react';
import { getAllPosts } from './lib/api';
import Data from './Components/Data';

const page = async () => {
  const post = await getAllPosts();
  console.log(Data);

  return (
    <div>
      <h1>We will get all posts plus testing fork </h1>
      <p>{post?.title}</p>
      <Suspense fallback={<p>Data is coming</p>}>
        <Data />
      </Suspense>
    </div>
  );
};

export default page;
