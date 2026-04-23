import "./globals.css";
export const metadata = {
  title: "Todo App",
  description: "Simple Todo List App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
