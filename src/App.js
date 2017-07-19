import React, { Component } from 'react';
import Table from './components/table.js';

class App extends Component {
  constructor() {
    super();
    // data is hard coded to the component state here
    // in production this would be handled with some sort of state management
    // mobx || redux are my choices, depends on the project needs
    // handling data and business logic outside of component is crucial for
    // scalability. Business logic within component === horror longterm.
    this.state = {
      tableData: {
        header: ['Magazine name', 'Year of first publication', 'City of origin'],
        body: [
          ['Forbes', '1917', 'New Jersey'],
          ['Vogue', '1892', 'Unknown'],
          ['Men\'s Health', '1987', '	Emmaus']
        ]
      }
    };
  }

  render() {
    return (
      <div>
        <Table dataset={this.state.tableData}></Table>
      </div>
    );
  }
}

export default App;
