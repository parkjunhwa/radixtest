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
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme;
                  try {
                    theme = localStorage.getItem("theme");
                  } catch (e) {
                    theme = null;
                  }
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                    document.documentElement.style.colorScheme = "dark";
                  } else if (theme === "light") {
                    document.documentElement.classList.remove("dark");
                    document.documentElement.style.colorScheme = "light";
                  } else if (theme === "system") {
                    var m = window.matchMedia("(prefers-color-scheme: dark)");
                    if (m.matches) {
                      document.documentElement.classList.add("dark");
                      document.documentElement.style.colorScheme = "dark";
                    } else {
                      document.documentElement.classList.remove("dark");
                      document.documentElement.style.colorScheme = "light";
                    }
                  } else {
                    document.documentElement.classList.remove("dark");
                    document.documentElement.style.colorScheme = "light";
                  }
                } catch (e) {
                  document.documentElement.classList.remove("dark");
                  document.documentElement.style.colorScheme = "light";
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
