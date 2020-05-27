import React from "react";
import styles from "./Drawer.module.css";
import Sketch from "react-p5";
import { Link } from "react-router-dom";

class Drawer extends React.Component {
  state = {
    width: 0,
    height: 0,
    pencilSize: 5,
    pencilColor: "#000000",
    backgroundColor: "#dddddd",
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  setup = (p5) => {
    p5.createCanvas(this.state.width, this.state.height);
    p5.background(this.state.backgroundColor);
  };

  draw = (p5) => {
    if (p5.mouseIsPressed) {
      p5.strokeWeight(this.state.pencilSize);
      p5.stroke(this.state.pencilColor);
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      p5.noFill();
    }
  };

  handleChangePencilColor = (e) => {
    this.setState({
      pencilColor: e.target.value,
    });
  };

  handleChangeBackgroundColor = (e) => {
    console.log(e.target.value, "wartosc");
    this.setState({
      backgroundColor: e.target.value,
    });
  };

  handleChangePencilSize = (e) => {
    this.setState({ pencilSize: e.target.value });
  };

  handleNew = () => {
    console.log(this.props);
    if (window.confirm("sure NEW?")) {
      this.props.history.go(`/drawer`);
    }
  };

  handleQuit = () => {
    if (window.confirm("sure QUIT?")) {
      // window.location.reload(false);
      this.props.history.push(`/`);
    }
  };

  render() {
    console.log(this.state.width, this.state.height);
    console.log(this.state.backgroundColor);
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.header__heading}>Drawer</h1>
          <ul className={styles.header__tools}>
            <li className={styles.tool}>
              <label className={styles.tool__label} htmlFor="pencil-color">
                Pencil color
              </label>
              <input
                className={styles.tool__input}
                type="color"
                name="pencil-color"
                id="pencil-color"
                value={this.state.pencilColor}
                onChange={this.handleChangePencilColor}
              />
            </li>
            <li className={styles.tool}>
              <label className={styles.tool__label} htmlFor="background-color">
                Background color
              </label>
              <input
                className={styles.tool__input}
                type="color"
                name="backgound-color"
                id="background-color"
                value={this.state.backgroundColor}
                onChange={this.handleChangeBackgroundColor}
              />
            </li>
            <li className={styles.tool}>
              <label className={styles.tool__label} htmlFor="pencil-size">
                Pencil size
              </label>
              <input
                className={styles.tool__input}
                type="number"
                name="pencil-size"
                id="pencil-size"
                value={this.state.pencilSize}
                step="1"
                onChange={this.handleChangePencilSize}
              />
            </li>
            <li className={styles.tool}>
              <button className={styles.tool__button} onClick={this.handleNew}>
                New
              </button>
              <button className={styles.tool__button} onClick={this.handleQuit}>
                Quit
              </button>
            </li>
          </ul>
        </header>
        <Sketch setup={this.setup} draw={this.draw}></Sketch>
      </div>
    );
  }
}

export default Drawer;
