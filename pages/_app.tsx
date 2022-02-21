import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import store from "../store/store";
import type { AppProps } from "next/app";
import MasterLayout from "../components/Layouts/MasterLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </Provider>
    // <Provider store={store}>
    //   <Component {...pageProps} />
    // </Provider>
    
  );
}

export default MyApp;
