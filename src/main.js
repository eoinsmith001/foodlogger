var React = require('react'),
  ReactDOM = require('react-dom');

var Form = React.createClass({
  getInitialState: function() {
    return {
      value: 'What did you eat?'
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    var value = this.state.value;
    return (
      <input type="text" value={value} onChange={this.handleChange} />
    );
  }
});

ReactDOM.render(
  <Form />,
  document.getElementById('content')
);
