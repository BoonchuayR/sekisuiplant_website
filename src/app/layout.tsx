import type { Metadata } from "next";
import { Prompt } from 'next/font/google'
import "./globals.css";

const prompt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "SEKISUT CO., LTD.",
  description: "Sekisui Chemical is a Plastics manufacturer with head offices in Osaka and Tokyo. The company owns a plethora of subsidiaries engaged in a variety of businesses. Sekisui has over 27,000 employees in more than eighteen countries worldwide.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = "en";

  return (
    <html lang={locale}>
      <body className={`${prompt.className} font-normal antialiased`}>
        {children}
      </body>
    </html>
  );
}
