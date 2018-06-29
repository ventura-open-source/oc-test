import React from 'react';
import styles from "../styles.css"

class Modules extends React.Component {
  render() {
    return (
      <ul>
        <li><a href="http://localhost::5001" className={styles[`${this.getClassName('product')}`]}>Product</a></li>
        <li><a href="http://localhost::5000" className={styles[`${this.getClassName('finance')}`]}>Finance</a></li>
        <li><a href="http://localhost::5002" className={styles[`${this.getClassName('marketing')}`]}>Marketing</a></li>
        <li><a href="http://localhost::5003" className={styles[`${this.getClassName('hr')}`]}>Hr</a></li>
      </ul>
    )
  }

  getClassName(projectToCompare) {
    const { currentProject } = this.props;

    return currentProject == projectToCompare ? 'current-project' : '';
  }
}

export default Modules;
