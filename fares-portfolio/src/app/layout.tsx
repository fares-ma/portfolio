import type { Metadata } from "next";
import "./globals.css";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";

export const metadata: Metadata = {
  title: 'Fares Mohamed Elsayed | Backend .NET Developer',
  description: 'Backend .NET Developer from Cairo, Egypt. Specialized in ASP.NET Core, Clean Architecture, and RESTful APIs. Open to new opportunities.',
  openGraph: {
    title: 'Fares Mohamed Elsayed | Backend .NET Developer',
    description: 'Building scalable, production-ready APIs using ASP.NET Core.',
    url: 'https://fares-mohamed.me',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col bg-bg text-text font-body antialiased selection:bg-accent selection:text-bg">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
