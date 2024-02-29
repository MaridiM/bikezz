import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./styles/globals.css";
import { Footer, Header } from "@/widgets";
import { CartProvider } from "@/shared";
import { Toaster } from "@/shared/ui/components/toaster";

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-rajdhani',
});

export const metadata: Metadata = {
    title: "BIKEZZ",
    description: "BIKEZZ - Online bike store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={rajdhani.variable}>
                <CartProvider>
                    <Header />
                    {children}
                    <Toaster />
                    <Footer />
                </CartProvider>
                {/* <div className="h-[2000px]"></div> */}
            </body>
        </html>
    );
}
