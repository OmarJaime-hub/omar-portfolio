export const metadata = {
  title: "Omar Jaime | Veteran Portfolio",
  description: "U.S. Army and Marine Corps veteran portfolio for training operations, logistics, range coordination, and operational readiness roles.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
