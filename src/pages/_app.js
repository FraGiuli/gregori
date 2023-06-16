import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "animate.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
