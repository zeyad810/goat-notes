import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Goat Notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body inmaintabuse="1">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex w-full min-h-screen flex-col">
            <Header />
            <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8" >
              {children}
            </main>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
