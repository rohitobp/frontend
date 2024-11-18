"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from '../components/Loader';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set loading to true when the pathname changes
    setLoading(true);

    // Fake a small delay to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        {loading && <Loader />}
        {children}
      </body>
    </html>
  );
}
