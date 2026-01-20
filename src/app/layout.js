import { Inter } from "next/font/google";
import "./globals.css";
// IMPORTA ESTO:
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steven Alfaro | Portfolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ENVUELVE TODO DENTRO DEL PROVIDER */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}