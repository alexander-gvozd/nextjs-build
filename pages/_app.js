import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Provider } from "react-redux";
import AccountStore from "../redux/store/Account";

function MyApp({ Component, pageProps, storeInitialState }) {
  return (
    <Provider store={AccountStore(storeInitialState)}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = function () {
  return {
    storeInitialState: {
      user: {
        userId: 1,
        name: "Some User",
        email: "some@user.email",
      },
    },
  };
};

export default MyApp;
