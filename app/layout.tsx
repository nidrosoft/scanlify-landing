import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import { AuthRedirectHandler } from "../components/AuthRedirectHandler/AuthRedirectHandler";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Scanlify: Business Card Scanning & CRM",
    description: "Scanlify is the modern way to scan business cards, manage contacts, and run campaigns. Effortless CRM for individuals, professionals, and teams.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Scanlify: Business Card Scanning & CRM" />
                {/* Product Name */}
                <meta name="product-name" content="Scanlify" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Scanlify: Business Card Scanning & CRM" />
                <meta
                    name="twitter:description"
                    content="Scanlify is the modern way to scan business cards, manage contacts, and run campaigns. Effortless CRM for individuals, professionals, and teams."
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />

                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Scanlify: Business Card Scanning & CRM" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://scanlify.com/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Scanlify is the modern way to scan business cards, manage contacts, and run campaigns. Effortless CRM for individuals, professionals, and teams."
                />
                <meta
                    property="og:site_name"
                    content="Scanlify"
                />
                <meta property="fb:admins" content="132951670226590" />

                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Scanlify: Business Card Scanning & CRM" />
                <meta
                    property="og:url"
                    content="https://scanlify.com/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Scanlify is the modern way to scan business cards, manage contacts, and run campaigns. Effortless CRM for individuals, professionals, and teams."
                />

                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Scanlify: Business Card Scanning & CRM" />
                <meta
                    property="og:url"
                    content="https://scanlify.com/"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Scanlify is the modern way to scan business cards, manage contacts, and run campaigns. Effortless CRM for individuals, professionals, and teams."
                />
            </head>
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>
                    {children}
                    <AuthRedirectHandler />
                </Providers>
            </body>
        </html>
    );
}
