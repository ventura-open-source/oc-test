import React from "react";
import styles from "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  componentDidMount() {
    window.oc.events.on('build', (details, data) => {
      this.setState({name: data})
    });
  }

  render() {
    return <div className={styles.special} onClick={() => { this.setState({name: 'cambio!'}) }}>
        <h1>
          Hello {this.state.name}
        </h1>
      </div>;
  }
}

export default App;
