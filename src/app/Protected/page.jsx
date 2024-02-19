import React from 'react';

import { redirect } from 'next/navigation.js';
import { getServerSession } from 'next-auth';

export default async function page() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }
  return (
    <div>
      <p>
        This is protected route and you can access it only you are logged in
      </p>
    </div>
  );
}
