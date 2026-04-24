import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Next.js Recreation",
  description:
    "A responsive Accredian Enterprise-inspired landing page built with Next.js App Router, reusable components, and a mock lead API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
