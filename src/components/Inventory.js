import React from "react";
import AddFishForm from "./AddFish";
import EditFishForm from "./EditFish";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory!!!</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fish</button>
      </div>
    );
  }
}

export default Inventory;
