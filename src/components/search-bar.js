import React, { Component } from 'react';

/*
this is a Functional component (as opposed to Class component):

const SearchBar = () => {
  return <input />
};

Functional components DO NOT have State.

Since users type into this input, our component needs to be able to introspect itself, so we need
a class based component. Class based components must always include a render() method, and return
some JSX.

We define a new class, SearchBar, and we give it access to all the  functionality that the
React.Component class has:
*/

class SearchBar extends Component {
  // constructor() gets called automatically any time a new instance of any JS class gets created
  constructor(props) {
    // calling super() calls a method defined in parent class (Component)
    super(props);

    /* we initialize state by creating a new object and assigning it to this.state. We NEVER update
    state outside of the constructor by reassigning its value. We can't declare
    this.state = { something: else }, we must use this.setState() and pass it an object */
    this.state = { term: '' };
  }

  render() {
    /*
    NEVER: this.state.term = event.target.value

    this.setState() is how state is updated after it's created in our constructor.
    */
    return (
      <div className="search-bar">
        <input
          placeholder="Search YouTube"
          /*
          we add value={this.state.term} to turn this into a controlled field (its value is set
          by state, not vice versa). The value is set to an empty string when constructor() is
          called. When user enters text, this.state.term is updated via our onChange callback,
          updating state -- THEN, our component re-renders, and the value is set via state.
          */
          value={this.state.term}
          /*
          Once we wire up our search input, this line:
          onChange={event => this.setState({ term: event.target.value })}
          needs to be refactored to this:
          */
          onChange={event => this.onInputChange(event.target.value)}
        />
        {/*
        it is, however, okay to reference this.state.term, e.g. if we were to do the following:
        Value of the input: {this.state.term}
        */}
      </div>
    );
  }

  /* We want to update State with the term, and invoke the callback we got from App component,
  onSearchTermChange() with the new term */
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
