import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ToastContainer transition={ Zoom } position="top-center" autoClose={3000} />
      <Component { ...pageProps } />

    </>

  );
}

export default MyApp
