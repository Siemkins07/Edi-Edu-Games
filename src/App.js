import React from "react";
import styles from "./App.module.css";
import { GameLevel, Operations, Intro, SingleTask } from "./components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    level: "",
    operator: "",
    questions: [],
    isFetching: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      questions: fetchedData,
      isFetching: !this.state.isFetching,
    });
  }

  handleClick = (e) => {
    this.setState({ level: e.target.value });
  };

  handleOperator = (e) => {
    this.setState({ operator: e.target.value });
  };

  handleNewQ = async () => {
    const fetchedData = await fetchData();
    this.setState({ questions: fetchedData });
  };

  render() {
    const { questions, isFetching } = this.state;
    return (
      <Router>
        <div className={styles.container}>
          {isFetching ? (
            <div>Loading screen..</div>
          ) : (
            <>
              <header className="container__header">
                <h1 className={styles.container__heading}>
                  <Link to="/">Edu Edi Games</Link>
                </h1>
              </header>

              <Route exact path="/" component={Intro} />
              <Route
                path="/level"
                render={(props) => (
                  <GameLevel {...props} selectLevel={this.handleClick} />
                )}
              />
              <Route
                path="/operations"
                render={(props) => (
                  <Operations {...props} selectOperator={this.handleOperator} />
                )}
              />
              <Route
                path="/single"
                render={(props) => (
                  <SingleTask
                    {...props}
                    newQ={this.handleNewQ}
                    questions={questions}
                  />
                )}
              />
            </>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
