/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./0components/Loading";
const Main = lazy(() => import("./1views/Main"));
const Entrance = lazy(() => import("./1views/Entrance"));
const Exit = lazy(() => import("./1views/Exit"));
const Dashboard = lazy(() => import("./1views/Dashboard"));
const Admin = lazy(() => import("./1views/Admin"));
const LoadingPage = lazy(() => import("./1views/LoadingPage"));

function App() {
 
  return (
    <div
      className="App"
      style={{
        fontFamily:'SamsungSharpSans-Medium',
        backgroundColor: "#f3f3f3",
        height: "100vh",
        display: "flex",
        margin: 0,
        mineight: "100vh",
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact={true} component={Main} />
            <Route path="/exit" exact={true} component={Exit} />
            <Route path="/entrance" exact={true} component={Entrance} />
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="/gnusmasadmin" exact={true} component={Admin} />
            <Route path="/loading" exact={true} component={LoadingPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
