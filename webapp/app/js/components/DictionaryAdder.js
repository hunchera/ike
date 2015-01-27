var React = require('react');
var bs = require('react-bootstrap');
var Input = bs.Input;
var DictionaryAdder = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.callback(this.state.value);
    this.setState({value: ''});
  },
  onChange: function(e) {
    this.setState({value: e.target.value});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          onChange={this.onChange}
          value={this.state.value}
          placeholder="Create New Dictionary"/>
      </form>
    );
  }
});
module.exports = DictionaryAdder;