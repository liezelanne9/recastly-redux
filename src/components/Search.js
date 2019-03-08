import React from 'react';
 
var Search = (props) => {
 

  //   this.state = {
  //     value: ''
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit() {
  //   this.props.handleSearchInputChange(this.state.value);
  // }

  // handleInputChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });

  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(e) => props.handleCurrentValue(e.target.value)}
      />
      <button className="btn hidden-sm-down" onClick={() => (props.handleSearchInputChange(props.value))}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
  

}
export default Search;