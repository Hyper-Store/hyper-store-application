import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {

  const { push } = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      push('/dashboard/main')
    } else {
      push('/auth/login')
    }
  }, [])

  return (
    <></>
  )
};

export default Home;
