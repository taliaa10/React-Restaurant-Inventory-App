import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = e => {
    // 1. Stop from submitting
    e.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store &rarr;</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
