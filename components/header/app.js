import React from "react";
import Logo from './components/Logo.js'
import Modules from './components/Modules.js'
import User from './components/User.js'

import styles from "./styles.css";

class App extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <header className={styles[`themed-${project}`]}>
        <Logo></Logo>
        <Modules></Modules>
        <User></User>
      </header>
    )
  }
}

export default App;
