import { Providers } from "@/components/Providers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`bg-slate-100`}>{children}</body>
      </Providers>
    </html>
  );
}
