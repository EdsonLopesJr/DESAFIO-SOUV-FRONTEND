import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { GlobalStyles } from "@/styles/globals";
import { ThemeProvider } from "@/context/themeContext";
import { ServiceProvider } from "@/context/ServiceContext";
import { TestimonialProvider } from "@/context/TestimonialContext";

import "swiper/swiper-bundle.css";
import "swiper/modules";
import { AppointmentProvider } from "@/context/AppointimentContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ServiceProvider>
        <AppointmentProvider>
          <TestimonialProvider>
            <Head>
              <title>beauty salon.</title>
              <meta
                name="description"
                content="Um salão exclusivo em São Paulo, especializado em tratamentos naturais."
              />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
                crossOrigin="anonymous"
              />
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
          </TestimonialProvider>
        </AppointmentProvider>
      </ServiceProvider>
    </ThemeProvider>
  );
}
