"use client";

import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'react-tooltip/dist/react-tooltip.css'
import { AppProps } from 'next/app';
import { Loading } from '../components/Loading';
import { ThemeProvider } from '../context/ThemeProvider.context';
import { NavBar } from '../components/Navbar';
import { GlobalStyle } from '../styles/globals';
import { Container } from '../components/Container';
import { Router } from 'next/router';
import { ToastContainer } from '../components/ToastContainer';
import Head from 'next/head';
import { EventProvider } from '../context/EventProvider.context';


export default function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    const handleStopLoading = () => {
        setTimeout(() => { setLoading(false) }, 500)
    }

    useEffect(() => {
        Router.events.on('routeChangeStart', () => { setLoading(true) })
        Router.events.on('routeChangeError', handleStopLoading);
        Router.events.on('routeChangeComplete', handleStopLoading);
    }, [])

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Russo+One&display=swap" rel="stylesheet" />
            </Head>
            <EventProvider>
                <ThemeProvider>
                    <Container>
                        <ToastContainer />
                        <NavBar />
                        <GlobalStyle />
                        {loading && (<Loading />)}
                        {!loading && (<Component {...pageProps} />)}
                    </Container>
                </ThemeProvider>
            </EventProvider>
        </>
    )
}