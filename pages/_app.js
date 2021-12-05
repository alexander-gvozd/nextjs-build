import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Provider } from "react-redux";
import AccountStore from "../redux/store/Account";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={AccountStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
