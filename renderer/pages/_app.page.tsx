"use client";

import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { Loading } from '../components/Loading';
import { ThemeProvider } from '../context/ThemeProvider.context';
import { NavBar } from '../components/Navbar';
import { GlobalStyle } from '../styles/globals';
import "bootstrap/dist/css/bootstrap.css";
import { Container } from '../components/Container';
import { Router } from 'next/router';
import { ToastContainer } from '../components/ToastContainer';


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
        <ThemeProvider>
            <Container>
                <ToastContainer />
                <NavBar />
                <GlobalStyle />
                {loading && (<Loading />)}
                {!loading && (<Component {...pageProps} />)}
            </Container>
        </ThemeProvider>
    )
}