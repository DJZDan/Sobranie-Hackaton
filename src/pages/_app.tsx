import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current path starts with '/userDashboard'

  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
  );
}
