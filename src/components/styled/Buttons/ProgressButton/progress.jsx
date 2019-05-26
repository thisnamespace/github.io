import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  background: ${props => props.btnColor};
  color: ${props => props.txtColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1em;
  line-height: 4;
  width: 300px; 
  height: 88px;
  border-radius: 5px;

  &[disabled],
  &[disabled].state-loading {
    cursor: default;
  }

  .content {
    position: relative;
    display: block;
    color: ${props => props.txtColor};
  }

  .content::before,
  .content::after {
    position: absolute;
    right: 20px;
    opacity: 0;
    transition: opacity 0.3s 0.3s;
  }

  .content::before {
    content: "\\2713"; /* Checkmark for success */
    font-size: 1rem;
  }

  .content::after {
    content: "\\2715"; /* Checkmark for error */
    font-size: 1rem;
  }

  .state-success .content::before,
  .state-error .content::after {
    opacity: 1;
  }

  .notransition {
    transition: none !important;
  }

  .progress {
    background: ${props => props.btnColor};
  }

  .progress-inner {
    position: absolute;
    left: 0;
    background: rgba(0,0,0,0.4)
    color: ${props => props.txtColor};
  }

  &[data-horizontal] .progress-inner {
    top: 0;
    width: 0;
    height: 100%;
    transition: width 0.3s, opacity 0.3s;
  }

  &[data-vertical] .progress-inner {
    bottom: 0;
    width: 100%;
    height: 0;
    transition: height 0.3s, opacity 0.3s;
  }

  /* Necessary styles for buttons with 3D transforms */

  &[data-perspective] {
    position: relative;
    display: inline-block;
    padding: 0;
    background: ${props => props.btnColor};
    perspective: 900px;
  }

  &[data-perspective] .content {
    padding: 0 60px;
    background: ${props => props.btnColor};
  }

  &[data-perspective] .progress-wrap {
    display: block;
    transition: transform 0.2s;
    transform-style: preserve-3d;
  }

  &[data-perspective] .content,
  &[data-perspective] .progress {
    outline: 1px solid rgba(0, 0, 0, 0); /* Smoothen jagged edges in FF */
  }

  /* Shrink horizontal */
  /* ====================== */

  &[data-style="shrink"] {
    /* common for horizontal and vertical */
    overflow: hidden;
    -webkit-transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
  }

  &[data-style="shrink"][data-horizontal] .content {
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
  }

  &[data-style="shrink"][data-horizontal] .content::before,
  &[data-style="shrink"][data-horizontal] .content::after {
    top: 100%;
    right: auto;
    left: 50%;
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  &[data-style="shrink"][data-horizontal].state-loading {
    -webkit-transform: scaleY(0.3);
    transform: scaleY(0.3);
  }

  &[data-style="shrink"][data-horizontal].state-loading
    .content {
    opacity: 0;
  }

  &[data-style="shrink"][data-horizontal].state-success .content,
  &[data-style="shrink"][data-horizontal].state-error .content {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
`;

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      btnState: '',
      progress: 0
    };
  } 
  componentDidMount() {
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onBtnClick = e => {
    if (this.bntState !== "state-loading") { 
      this.setState({ btnState: "state-loading" }, this.updateProgress());
    }
  };

  updateProgress = () => {
    if (this.bntState !== "state-loading") { 
      this.interval = setInterval(() => {
        if (this.state.progress === 100) {
          clearInterval(this.interval);
          this.setState({btnState: "state-success", progress: 0})
        }
        else {
          this.setState({progress: this.state.progress + 1});
        }
      }, 50);
    }
  }

  getStyles = () => {
    return {
      width: this.state.progress + "%",
      opacity: 0.5,
      background: this.props.loaderColor
    }
  }

  render() {
    return (
      <>
        <Button
          className={this.state.btnState}
          data-style="shrink"
          data-perspective
          data-horizontal
          onClick={this.onBtnClick}
          btnColor={this.props.btnColor}
          txtColor={this.props.txtColor}
        >
          <span className="progress-wrap">
            <span className="content">Submit</span>
            <span className="progress">
              <span className="progress-inner" style={this.getStyles()} />
            </span>
          </span>
        </Button>
      </>
    );
  }
}

Progress.defaultProps = {
  label: "Submit",
  btnColor: "#000",
  loaderColor: "#FFF",
  txtColor: "#FFF"
};

export default Progress;
