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
      weights: null
    };
  }

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userId: user.uid });
        this.fetchData();
      } else {
        // No user is signed in.
      }
    });
  }
  fetchData = async () => {
    const db = app.firestore();
    const data = await db
      .collection("users")
      .doc(this.state.userId)
      .get();
    const weightList = await db
      .collection("users")
      .doc(this.state.userId)
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
    e.preventDefault();
    const newWeight = { Kg: kg, Date: date };
    this.state.weights.push(newWeight);
    this.sendToDB(newWeight);
    this.setState({ add: false });
  };

  sendToDB = async newWeight => {
    await app
      .firestore()
      .collection("users")
      .doc(this.state.userId)
      .collection("Weight")
      .add({
        Kg: newWeight.Kg,
        Date: newWeight.Date
      });
  };

  render() {
    if (this.state.weights) {
      console.log(this.state.weights);
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
    } else {
      return <div>loading datas...</div>;
    }
  }
}

export default Main;
