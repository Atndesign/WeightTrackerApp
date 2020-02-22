import React, { Component } from "react";
import Bmi from "./Bmi";
import Goal from "./Goal";
import Graph from "./Graph";
import HistoryList from "./history/HistoryList";
import User from "./User";
import AddWeight from "./AddWeight";
import app from "../../firebase";
import "firebase/firestore";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      weights: [{ kg: 0, date: "today" }]
    };
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userId: user.uid });
      } else {
        // No user is signed in.
      }
    });

    this.fetchData();
  }
  fetchData = async () => {
    const db = app.firestore();
    const data = await db
      .collection("users")
      .doc("WtFThdf6GUMRzxOP2WZLuuQt2LY2")
      .get();
    const weightList = await db
      .collection("users")
      .doc("WtFThdf6GUMRzxOP2WZLuuQt2LY2")
      .collection("Weight")
      .get();
    this.setState({
      user: data.data(),
      weights: weightList.docs.map(e => e.data())
    });
  };
  addWeight = () => {
    this.setState({ add: true });
  };

  weightAdded = (e, kg, date) => {
    console.log(kg, date);

    e.preventDefault();
    this.state.user.weight.push({ kg: kg, date: date });
    this.setState({ add: false });
  };

  render() {
    if (this.state.weights !== []) {
      if (this.state.add) {
        return <AddWeight addWeight={this.weightAdded} />;
      } else {
        return (
          <React.Fragment>
            <div className="btn-bottom__container">
              <button className="add-weight__btn" onClick={this.addWeight}>
                Add weight
              </button>
              <button
                className="add-weight__btn"
                onClick={() => app.auth().signOut()}
              >
                Sign out
              </button>
            </div>
            <User username={this.state.user.username} />
            <Graph weightList={this.state.weights} />
            <Goal weightList={this.state.weights} goal={this.state.user.goal} />
            <Bmi weightList={this.state.weights} user={this.state.user} />
            <HistoryList weightList={this.state.weights} />
          </React.Fragment>
        );
      }
    }
  }
}

export default Main;
