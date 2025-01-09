import Footer from "./components/Global/Footer";
import Header from "./components/Global/Header";
import "./globals.css";

interface Props {
  children: React.ReactElement;
}
const layout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <title>My Blog</title>
      </head>
      <body className="font-normal text-base text-neutral-600 ">
        <Header />
        <div className="my-8 px-4 max-w-6xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default layout;
