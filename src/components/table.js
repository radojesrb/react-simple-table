import React, { Component } from 'react';

class Table extends Component {
  /**
   * This method is used for preparing rows with either <th> || <td>.
   * @function
   * @param {array} data - consist of data for <th> || <td>.
   * @param {string} type - possible values 'head', 'body'.
   * @returns {array} more precisely array of objects
   */
  prepareTableRows(data, type) {
    // generate custom tag name
    const TagName = (type === 'head') ? 'th' : 'td';

    return data.map((item) => {
      return (
        <TagName>{item}</TagName>
      );
    });
  }

  /**
   * This method is handling table Body data.
   * It reuses 'prepareTableRows' to handle rows.
   * @function
   * @param {array} data - consist of data tbody rows.
   * @returns {array} more precisely array of objects
   */
  prepareTableBody(data) {
    return data.map((item) => {
      return (
        <tr>
          {this.prepareTableRows(item, 'body')}
        </tr>
      );
    });
  }

  render() {
    // store table header data with failover to empty array
    const tableHeaderData = this.props.dataset.header || [];
    // store table body data with failover to empty array
    const tableBodyData = this.props.dataset.body || [];

    return (
      // classes used here are from Bootstrap
      <table className="table table-striped">
        <thead>
          <tr>
            {this.prepareTableRows(tableHeaderData, 'head')}
          </tr>
        </thead>
        <tbody>
          {this.prepareTableBody(tableBodyData)}
        </tbody>
      </table>
    );
  }
}

export default Table;
