import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "Bento Cards: AI",
    description: "AI-related Bento Cards for innovative projects",
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
                <meta name="description" content="Bento Cards: AI" />
                {/* Product Name */}
                <meta name="product-name" content="Bento Cards: AI" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Bento Cards: AI" />
                <meta
                    name="twitter:description"
                    content="AI-related Bento Cards for innovative projects"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Bento Cards: AI" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-v2-ai"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="AI-related Bento Cards for innovative projects"
                />
                <meta property="og:site_name" content="Bento Cards: AI" />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Bento Cards: AI" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-v2-ai"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="AI-related Bento Cards for innovative projects"
                />
                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Bento Cards: AI" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-v2-ai"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="AI-related Bento Cards for innovative projects"
                />
            </head>
            <body className={rubik.className}>{children}</body>
        </html>
    );
}
