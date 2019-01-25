import React, { Component } from "react";
import OwlCard from "./components/OwlCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Owls from "./Owls.json";

const OwlCards = Owls;

class App extends Component {
  state = {
    Owls,
    Score: 0,
    TopScore: 0,
    Clicked: [],
    Message: ""
  };

  // Fisher Yates Array Shuffle Algorithm
  shuffleCards = OwlCards => {
    for (let i = OwlCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = OwlCards[i];
        OwlCards[i] = OwlCards[j];
        OwlCards[j] = temp;
    }
    return OwlCards
  };

  clickOwl = id => {

    this.setState({
      Owls: this.shuffleCards(OwlCards)
    });

    if (this.state.Clicked.includes(id)) {

      this.setState({
        Score: 0,
        Clicked: [],
        Message: "Your guess is wrong!"
      });

    } else {

      this.setState({
        Score: this.state.Score + 1,
        TopScore: this.state.TopScore + 1,
        Clicked: this.state.Clicked.concat([id]),
        Message: "Your guess is correct!"
      });

      if (this.state.Score < this.state.TopScore) {
        this.setState({
          TopScore: this.state.TopScore
        });
      }

      if (this.state.TopScore === 12) {
        this.setState({
          Message: "Your win!"
        });
      }
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>
        <h1>Owls</h1>
        <h4>Don&#39;t pick me twice!</h4>
        <div className="scores">
        <p className="text-left">Score: {this.state.Score}</p>
        <p className="text-right">Top Score: {this.state.TopScore}</p>
        <p>{this.state.Message}</p>
        </div>
        </Header>
        {this.state.Owls.map(owl => (
          <OwlCard
            clickOwl={this.clickOwl}
            id={owl.id}
            key={owl.id}
            image={owl.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
