require('./node_modules/bootstrap/dist/css/bootstrap.min.css');

import React from 'react';
import Button from './public/src/components/Button';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
      downVotes: 0
    };
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(forElem) {
    console.log(forElem);
    if (forElem === 'upVotes') {
      this.setState({
        upVotes: this.state.upVotes + 1
      });
    } else {
      this.setState({
        downVotes: this.state.downVotes + 1
      });
    }

  }
	render() {
    console.log(this.state.upVotes);
		return (
      <div>
        <h1> The current vote is: {this.state.upVotes - this.state.downVotes}</h1>
        <div>
        <Button forElem={'upVotes'} voteHandler={this.handleVote} labelName={'Upvote'} /> { }
        <Button forElem={'downVotes'} voteHandler={this.handleVote} labelName={'Downvote'} />
        </div>
      </div>
		);
	}
}

React.render(<App/>, document.querySelector('#myApp'));
