import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div>
        {this.props.children}//renders the active chil route handler
      </div>
    );
  }
}
export default App;
