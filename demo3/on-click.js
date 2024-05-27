"use strict";

class OnClickElements extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(`You clicked on the ${event.target.id} element.`);
  }

  render() {
    return (
      <div className="container-div">
        <div id="div-element" onClick={this.handleClick}>
          I am DIV
        </div>

        <span id="span-element" onClick={this.handleClick}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element" onClick={this.handleClick}>
          I am Button
        </button>
        <br></br>

        <a id="link-element" href="#" onClick={this.handleClick}>
          I am LINK
        </a>

        <div id="div-element-2" className="button" onClick={this.handleClick}>
          I am DIV
        </div>

        <span id="span-element-2" className="button" onClick={this.handleClick}>
          I am SPAN
        </span>
        <br></br>

        <button id="button-element-2" className="button" onClick={this.handleClick}>
          I am Button
        </button>
        <br></br>

        <a id="link-element-2" className="button" href="#" onClick={this.handleClick}>
          I am LINK
        </a>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(OnClickElements),
  document.getElementById("root")
);
