import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {

  const { push } = useRouter();

  useEffect(() => {
    push('/auth/login')
  }, [])

  return (
    <></>
  )
};

export default Home;
