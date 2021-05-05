import React from "react";


interface HomeProps {}

interface HomeState  {
  excuse: string
}

const excuses = [
  "I mean in March last year things were tense!",
  "I'm still waiting for Luke to loop me in. Sorry.",
  "Sorry, I don't think the attachment came through.",
  "Ricky, it's always Luke.",
  "goddamn Luke",
  "sorry but my grandma died... again.",
  "I would but i don't wanna",
  "Aging cat needed it's glands expressed.",
  "My frog is just too anxious",
  "I need to scrub my tile with a toothbrush.",
  "You know I can't handle spicy food",
  "There's no other way to really deal with grout.",
  "I'm actually at capacity",
]

function newExcuse(): string {
  return excuses[Math.floor(Math.random() * excuses.length)];
}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props) {
    super(props);

    this.state = {
      excuse: ''
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>is it finished?</h1>
        <button onClick={() => this.setState({ excuse: newExcuse() })}>No</button>
        <p>{ this.state.excuse }</p>
      </div>
    );
  };
}

export default Home;
