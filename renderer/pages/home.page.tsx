import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {

  const { push } = useRouter();

  useEffect(() => {
    push('/dashboard/settings')
  }, [])

  return (
    <></>
  )
};

export default Home;
