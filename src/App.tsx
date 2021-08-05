import React, { useEffect } from "react";
//import InterceptorService from "./services/AuthService/InterceptorService";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DefaultLayout } from "./containers/DefaultLayout/DefaultLayout";
import "./App.scss";

const loading = () => <div>Loading...</div>;

function App() {

  // useEffect(() => {
  //   // InterceptorService.useInterceptor();
  // }, []);

  return (
    
    <Router>
    <div>hello farooq</div>  
        <Switch>
        {/* <Route exact path='/' component={DefaultLayout} /> */}
          <Route exact path="/" render={(props) => <DefaultLayout />} />
        </Switch>
     </Router>
  );
}

export default App;
