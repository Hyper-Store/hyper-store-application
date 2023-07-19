import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {

  const { push } = useRouter();

  useEffect(() => {
    push('/dashboard/main')
  }, [])

  return (
    <></>
  )
};

export default Home;
