import React, { Component } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/SymbolGrid.css";

class Calculator extends Component {
  state = {
    display: "",
    result: "",
    firstOperand: "",
    secondOperand: "",
    operator: "",
    firstOperandFlag: false,
    secondOperandFlag: false,
    operatorFlag: false,
  };

  handleClick = (event) => {
    console.log("Entered onclick event");
    console.log(this.state.firstOperandFlag, this.state.operatorFlag, this.state.secondOperandFlag);

    let disVariable = "";

    if (!this.state.firstOperandFlag) {
      this.setState({ firstOperand: event.target.value });
      this.setState({ firstOperandFlag: true });
      disVariable = this.state.display + event.target.value;
    } else if (!this.state.operatorFlag) {
      console.log("1 enter");
      this.setState({ operator: event.target.value });
      this.setState({ operatorFlag: true });
      disVariable = this.state.display + event.target.value;
      console.log("1 enter", this.state.operator, this.state.operatorFlag);
    } else if (!this.state.secondOperandFlag) {
      console.log("2 enter");
      this.setState({ secondOperand: event.target.value });
      this.setState({ secondOperandFlag: true });
      disVariable = this.state.display + event.target.value;
    }

    this.setState({ display: disVariable });
    console.log(this.state);
  };

  clearClick = (event) => {
    console.log("Entered onclick event");
    console.log(this.state.firstOperandFlag, this.state.operatorFlag, this.state.secondOperandFlag);
    this.setState({ result: "" });
    this.setState({ display: "" });
    this.setState({ firstOperand: "" });
    this.setState({ secondOperand: "" });
    this.setState({ operator: "" });
    this.setState({ operatorFlag: "" });
    this.setState({ firstOperandFlag: "" });
    this.setState({ secondOperandFlag: "" });
  };

  negateClick = (event) => {
    if (!this.state.firstOperandFlag) {
      console.log("Entering negateclick");
      let resVariable = this.state.firstOperand * -1;
      this.setState({ display: resVariable });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //this.setState({display: this.state.display + '='})
    //console.log(this.state.name, this.state.password, this.state.email);
    console.log("state", this.state);

    if (this.state.firstOperandFlag && this.state.secondOperandFlag && this.state.operatorFlag) {
      console.log("Entering result");

      let resVariable = 0;
      let displayVariable = "";

      if (this.state.operator === "+") {
        resVariable = parseInt(this.state.firstOperand) + parseInt(this.state.secondOperand);
        displayVariable = this.state.display + "=" + resVariable;
      } else if (this.state.operator === "-") {
        resVariable = parseInt(this.state.firstOperand) - parseInt(this.state.secondOperand);
        displayVariable = this.state.display + "=" + resVariable;
      } else if (this.state.operator === "*") {
        resVariable = parseInt(this.state.firstOperand) * parseInt(this.state.secondOperand);
        displayVariable = this.state.display + "=" + resVariable;
      } else if (this.state.operator === "/") {
        resVariable = parseInt(this.state.firstOperand) / parseInt(this.state.secondOperand);
        displayVariable = this.state.display + "=" + resVariable;
      } else if (this.state.operator === "%") {
        resVariable = parseInt(this.state.firstOperand) % parseInt(this.state.secondOperand);
        displayVariable = this.state.display + "=" + resVariable;
      }

      this.setState({ result: resVariable });

      this.setState({ display: displayVariable });

      console.log("state2", this.state);
    }
  };

  render() {
    return (
      <div>
        <h1> Calculator</h1>

        <form className="SymbolGrid" onSubmit={this.handleSubmit}>
          <InputField type="text" placeholder="0" name="show" value={this.state.display} />
          <div className="first-row">
            <Button type="button" background="grey" value="AC" name="AC" onClick={this.clearClick} />
            <Button type="button" background="grey" value="+/-" onClick={this.negateClick} />
            <Button type="button" background="grey" value="%" onClick={this.handleClick} />
            <Button type="button" background="orange" value="/" onClick={this.handleClick} />
          </div>
          <div className="second-row">
            <Button type="button" background="lightgrey" value="7" onClick={this.handleClick} />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="8" />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="9" />
            <Button onClick={this.handleClick} type="button" background="orange" value="*" />
          </div>
          <div className="third-row">
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="4" />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="5" />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="6" />
            <Button onClick={this.handleClick} type="button" background="orange" value="-" />
          </div>
          <div className="fourth-row">
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="1" />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="2" />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="3" />
            <Button onClick={this.handleClick} type="button" background="orange" value="+" />
          </div>
          <div className="fifth-row">
            <Button type="button" background="lightgrey" value="0" className="button1" onClick={this.handleClick} />
            <Button onClick={this.handleClick} type="button" background="lightgrey" value="." />
            <Button type="submit" background="orange" value="=" />
          </div>
        </form>
      </div>
    );
  }
}

export default Calculator;
