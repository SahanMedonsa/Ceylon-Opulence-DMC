import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: '#fff', color: '#333' }}>
        <Navigation />
        <main className=" min-h-screen bg-white transition-colors duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
