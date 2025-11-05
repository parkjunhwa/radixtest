import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Radix UI Dashboard",
  description: "Next.js dashboard with all Radix UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem("theme");
                  if (savedTheme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else if (savedTheme === "light") {
                    document.documentElement.classList.remove("dark");
                  } else if (savedTheme === "system") {
                    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                    if (mediaQuery.matches) {
                      document.documentElement.classList.add("dark");
                    } else {
                      document.documentElement.classList.remove("dark");
                    }
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
