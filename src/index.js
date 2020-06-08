import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { AuthProvider, AuthContext } from "./context/Auth.js";
import { StackProvider } from "./context/Stack.js";

import AdminLayout from "layouts/Admin/Admin.js";
import LandingPage from "layouts/LandingPage/LandingPage.js";
import Payment from "layouts/Payment/Payment.js";
import PaymentSuccess from "layouts/Payment/Success.js";
import Terminal from "components/Terminal/Terminal.js";
import Login from "components/Login/Login.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const hist = createBrowserHistory();

const App = () => {
  const { authenticated } = React.useContext(AuthContext);

  return (
    <Router history={hist}>
      <Switch>
        <Route
          path="/pro/success"
          render={(props) => <PaymentSuccess {...props} />}
        />
        <Route path="/pro" render={(props) => <Payment {...props} />} />
        <Route
          path="/build/:buildId"
          render={(props) => <Terminal {...props} />}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route
          path="/admin"
          render={(props) =>
            authenticated ? <AdminLayout {...props} /> : <Login {...props} />
          }
        />
        <Route path="/" render={() => <LandingPage />} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <AuthProvider>
    <StackProvider>
      <App />
    </StackProvider>
  </AuthProvider>,
  document.getElementById("root")
);
