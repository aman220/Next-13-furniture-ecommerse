
import "@Styles/global.css";
import Home from "./page";

export const metadata = {
  title: "PortFolio",
  description: "Discover my rotfolio here",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
