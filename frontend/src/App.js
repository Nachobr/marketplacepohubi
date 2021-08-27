import React, { useState, useEffect } from "react";
import { getBlockchain } from "./ethereum.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Store from "./components/store/Store";
import Message from "./components/message/Message";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ProfileView from "./components/profile/Profile";
import MessagesBox from './components/MessageBox/MessagesBox';
import Mailbox from './components/mailbox/Mailbox';
import Login from "./components/login/login";
import OrdersView from "./components/orders/Orders";
import SalesActive from "./components/sales/SalesActive";
import SalesComplete from "./components/sales/SalesComplete";
import CheckOrders from "./components/orders/CheckOrders";
import SalesCompleteDetails from "./components/sales/SalesCompleteDetails";
import MyInfo from "./components/myinfo/MyInfo";
// import Chat from "./components/mailbox/Chat";

function App() {
  const [paymentProcessor, setPaymentProcessor] = useState(undefined);
  const [ubi, setUbi] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { paymentProcessor, ubi, signerAddress } = await getBlockchain();
      setPaymentProcessor(paymentProcessor);
      setUbi(ubi);
      setSignerAddress(signerAddress);
    };
    init();
  }, []);

  if (typeof window.ethereum === "undefined") {
    return <Message />;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <body>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orders">
              <Layout>
                <OrdersView />
              </Layout>
            </Route>
            <Route path="/checkorders">
              <Layout>
                <CheckOrders />
              </Layout>
            </Route>
            <Route path="/messagesbox">
            <Layout>
              <MessagesBox />
            </Layout>
            </Route>
            <Route path="/salesactive">
              <Layout>
                <SalesActive />
              </Layout>
            </Route>
            <Route path="/salescomplete">
              <Layout>
                <SalesComplete />
              </Layout>
            </Route>
            <Route path="/salescompletedetails">
              <Layout>
                <SalesCompleteDetails />
              </Layout>
            </Route>
            <Route path="/mailbox">
            <Layout>
              <Mailbox />
            </Layout>
            </Route>
            <Route path="/myinfo">
            <Layout>
              <MyInfo />
            </Layout>
            </Route>
            {/* <Route path="chat">
            <Layout>
              <Chat />
            </Layout>
            </Route> */}
            {/* <Route path="/profile">
              <Layout>
                <ProfileView />
              </Layout>
            </Route> */}

            <Route path="/">
              <Store
                paymentProcessor={paymentProcessor}
                ubi={ubi}
                signerAddress={signerAddress}
              />
            </Route>
          </Switch>
        </body>

        <Footer />
      </div>
    </Router>
  );
}

export default App;