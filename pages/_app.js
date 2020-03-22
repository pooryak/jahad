import React from "react";
import App from "next/app";
import UserContext from "../contexts/userContext";
import '../styles/index.less'

class MyApp extends App {
  state = {
    direction: "rtl"
  };
  changeDirection = () => {
    this.setState({ direction: "ltr" });
  };
  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider
        value={{
          direction: this.state.direction,
          changeDirection: this.changeDirection
        }}
      >
        <div style={{ direction: this.state.direction ,width: '95%',margin:'0 auto' }}>
          <Component {...pageProps} />
        </div>
      </UserContext.Provider>
    );
  }
}

export default MyApp;
