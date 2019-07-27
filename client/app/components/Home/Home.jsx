/* eslint-disable no-undef */
import React, { Component } from "react";
import "whatwg-fetch";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };

    this.newCounter = this.newCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.deleteCounter = this.deleteCounter.bind(this);

    this._modifyCounter = this._modifyCounter.bind(this);
  }

  componentDidMount() {
    fetch("/api/counters")
      .then(res => res.json())
      .then(json => {
        this.setState({
          counters: json
        });
      });
  }

  newCounter() {
    fetch("/api/counters", { method: "POST" })
      .then(res => res.json())
      .then(json => {
        let data = this.state.counters;
        data.push(json);

        this.setState({
          counters: data
        });
      });
  }

  incrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/increment`, { method: "PUT" })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  decrementCounter(index) {
    const id = this.state.counters[index]._id;

    fetch(`/api/counters/${id}/decrement`, { method: "PUT" })
      .then(res => res.json())
      .then(json => {
        this._modifyCounter(index, json);
      });
  }

  deleteCounter(index) {
    const id = this.state.counters[index]._id;

    // eslint-disable-next-line no-unused-vars
    fetch(`/api/counters/${id}`, { method: "DELETE" }).then(_ => {
      this._modifyCounter(index, null);
    });
  }

  _modifyCounter(index, data) {
    let prevData = this.state.counters;

    if (data) {
      prevData[index] = data;
    } else {
      prevData.splice(index, 1);
    }

    this.setState({
      counters: prevData
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-md-4 card p-0">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Counters</h5>
                <ul>
                  {this.state.counters.map((counter, i) => (
                    <li className="list-unstyled" key={i}>
                      <span className="pr-3 h5">{counter.count} </span>
                      <button className="btn btn-primary m-1" onClick={() => this.incrementCounter(i)}>+</button>
                      <button className="btn btn-primary m-1" onClick={() => this.decrementCounter(i)}>-</button>
                      <button className="btn btn-danger m-1" onClick={() => this.deleteCounter(i)}>x</button>
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary m-1" onClick={this.newCounter}>New counter</button>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>

      </>
    );
  }
}

export default Home;
