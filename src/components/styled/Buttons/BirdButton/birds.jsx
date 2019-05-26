import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from 'styled-theming';
//Assets
import birds from "./birds.svg";

const Wrapper = styled.div`
	width: 300px; 
	height: 88px;
	cursor: pointer;
	path {
		fill: ${props => props.color};
	}​
`;

const ButtonBird = styled.button`
  width: 300px; 
  height: 88px;
  background-color: ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  opacity: 1;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:hover{
    .bird--30{
      left: 600px;
      top: -550px;
      opacity: 0;
			z-index: 999;
      transition: left 1.5s cubic-bezier(0.42, 0, 0.58, 1), top 1.5s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.5s linear 1s;
    }
    .bird--30:after{
      left: 50px;
      top: 50px;
      transition: all 1.5s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
    }
    .bird--30:before{
      left: -50px;
      top: 50px;
      transition: all 1.5s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
    }
  }
	.bird,
	.bird:before,
	.bird:after,
	.bird--1,
	.bird--1:after,
	.bird--1:before,
	.bird--2,
	.bird--2:after,
	.bird--2:before,
	.bird--3,
	.bird--3:after,
	.bird--3:before,
	.bird--4,
	.bird--4:after,
	.bird--4:before,
	.bird--5,
	.bird--5:after,
	.bird--5:before,
	.bird--6,
	.bird--6:after,
	.bird--6:before,
	.bird--7,
	.bird--7:after,
	.bird--7:before,
	.bird--8,
	.bird--8:after,
	.bird--8:before,
	.bird--9,
	.bird--9:after,
	.bird--9:before,
	.bird--10,
	.bird--10:after,
	.bird--10:before,
	.bird--11,
	.bird--11:after,
	.bird--11:before,
	.bird--12,
	.bird--12:after,
	.bird--12:before,
	.bird--13,
	.bird--13:after,
	.bird--13:before,
	.bird--14,
	.bird--14:after,
	.bird--14:before,
	.bird--15,
	.bird--15:after,
	.bird--15:before,
	.bird--16,
	.bird--16:after,
	.bird--16:before,
	.bird--17,
	.bird--17:after,
	.bird--17:before,
	.bird--18,
	.bird--18:after,
	.bird--18:before,
	.bird--19,
	.bird--19:after,
	.bird--19:before,
	.bird--20,
	.bird--20:after,
	.bird--20:before,
	.bird--21,
	.bird--21:after,
	.bird--21:before,
	.bird--22,
	.bird--22:after,
	.bird--22:before,
	.bird--23,
	.bird--23:after,
	.bird--23:before,
	.bird--24,
	.bird--24:after,
	.bird--24:before,
	.bird--25,
	.bird--25:after,
	.bird--25:before,
	.bird--26,
	.bird--26:after,
	.bird--26:before,
	.bird--27,
	.bird--27:after,
	.bird--27:before,
	.bird--28,
	.bird--28:after,
	.bird--28:before,
	.bird--29,
	.bird--29:after,
	.bird--29:before,
	.bird--30,
	.bird--30:after,
	.bird--30:before {
		opacity: 1;
	  display:block;
	  position: absolute;
	  mask-image: url(${birds});
    background-color: ${props => props.color};
    mask-image: url(${birds});
	  mask-size: auto 100%;
	  width: ${props => props.theme.$widthBird2};
    height: ${props => props.theme.$heightBird2};
    top: 0;
    left: 0;
	  animation-name: fly-cycle;
	  animation-timing-function: steps(3);
	  animation-iteration-count: infinite;
	}
	.bird--1:after,
	.bird--1:before,
	.bird--2:after,
	.bird--2:before,
	.bird--4:after,
	.bird--4:before,
	.bird--5:after,
	.bird--5:before,
	.bird--7:after,
	.bird--7:before,
	.bird--8:after,
	.bird--8:before,
	.bird--10:after,
	.bird--10:before,
	.bird--11:after,
	.bird--11:before,
	.bird--13:after,
	.bird--13:before,
	.bird--14:after,
	.bird--14:before,
	.bird--16:after,
	.bird--16:before,
	.bird--17:after,
	.bird--17:before,
	.bird--18,
	.bird--18:after,
	.bird--18:before,
	.bird--19,
	.bird--19:after,
	.bird--19:before,
	.bird--20:after,
	.bird--20:before,
	.bird--21,
	.bird--21:after,
	.bird--21:before,
	.bird--22,
	.bird--22:after,
	.bird--22:before,
	.bird--23,
	.bird--23:after,
	.bird--23:before,
	.bird--24,
	.bird--24:after,
	.bird--24:before,
	.bird--25,
	.bird--25:after,
	.bird--25:before,
	.bird--26,
	.bird--26:after,
	.bird--26:before,
	.bird--27,
	.bird--27:after,
	.bird--27:before,
	.bird--28,
	.bird--28:after,
	.bird--28:before,
	.bird--29,
	.bird--29:after,
	.bird--29:before,
	.bird--30,
	.bird--30:after,
	.bird--30:before{
		width: ${props => props.theme.$widthBird1};
    height: ${props => props.theme.$heightBird2};
    top: -8px;
    left: 8px;
    z-index: -100;
	}
	.bird--21,
	.bird--22,
	.bird--23,
	.bird--24,
	.bird--25,
	.bird--26,
	.bird--27,
	.bird--28,
	.bird--29{
		top: 0;
	}
	
	.bird--22,
	.bird--25,
	.bird--28{
		top: ${props => props.theme.$sizeh4}px;
	}

	.bird--23,
	.bird--26,
	.bird--29{
		top: ${props => props.theme.$sizeh4 * 2 -5}px;
	}
	.bird--24,
	.bird--25,
	.bird--26{
		left: ${props => props.theme.$sizew4fore + 15}px;
	}
	.bird--27,
	.bird--28,
	.bird--29{
		left: ${props => props.theme.$sizew4fore * 2 + 20}px;
	}
	.bird--18{
		top:0;
		left:0;
	}
	.bird--18:after,
	.bird--18:before{
		left: -20px;
	}
	.bird--19:after,
	.bird--19:before{
		left: -10px;
	}
	.bird--1:before,
	.bird--4:before,
	.bird--7:before,
	.bird--10:before,
	.bird--13:before,
	.bird--16:before,
	.bird--19:before{
    top: 18px;
	}
	.bird--2:after,
	.bird--5:after,
	.bird--8:after,
	.bird--11:after,
	.bird--14:after,
	.bird--17:after,
	.bird--20:after{
    top: -18px;
    left: 12px
	}
	.bird--20:after,
	.bird--20:before,
	.bird--21:after{
    left: 27px
	}
	.bird--2:before,
	.bird--5:before,
	.bird--8:before,
	.bird--11:before,
	.bird--14:before,
	.bird--17:before,
	.bird--20:before{
    top: -36px;
    left: 12px
	}
	.bird--21:before,
	.bird--22:before,
	.bird--23:before,
	.bird--24:before,
	.bird--25:before,
	.bird--26:before{
    top: 10px;
    left: 45px;
	}
	.bird--21:after,
	.bird--22:after,
	.bird--23:after,
	.bird--24:after,
	.bird--25:after,
	.bird--26:after,
	.bird--27:after,
	.bird--28:after,
	.bird--29:after{
    left: 10px;
    top: 4px;
	}
	.bird--27:before,
	.bird--28:before,
	.bird--29:before{
    left: -45px;
    top: 10px;
	}
	.bird:before,
	.bird:after,
	.bird--1:after,
	.bird--1:before,
	.bird--2:before,
	.bird--2:after,
	.bird--3:after,
	.bird--3:before,
	.bird--4:after,
	.bird--4:before,
	.bird--5:after,
	.bird--5:before,
	.bird--6:after,
	.bird--6:before,
	.bird--7:after,
	.bird--7:before,
	.bird--8:after,
	.bird--8:before,
	.bird--9:after,
	.bird--9:before,
	.bird--10:after,
	.bird--10:before,
	.bird--11:after,
	.bird--11:before,
	.bird--12:after,
	.bird--12:before,
	.bird--13:after,
	.bird--13:before,
	.bird--14:after,
	.bird--14:before,
	.bird--15:after,
	.bird--15:before,
	.bird--16:after,
	.bird--16:before,
	.bird--17:after,
	.bird--17:before,
	.bird--18:after,
	.bird--18:before,
	.bird--19:after,
	.bird--19:before,
	.bird--20:after,
	.bird--20:before,
	.bird--21:after,
	.bird--21:before,
	.bird--22:after,
	.bird--22:before,
	.bird--23:after,
	.bird--23:before,
	.bird--24:after,
	.bird--24:before,
	.bird--25:after,
	.bird--25:before,
	.bird--26:after,
	.bird--26:before,
	.bird--27:after,
	.bird--27:before,
	.bird--28:after,
	.bird--28:before,
	.bird--29:after,
	.bird--29:before,
	.bird--30:after,
	.bird--30:before{
		content: '';
	}
	.bird:before,
	.bird--3:before,
	.bird--12:before,
	.bird--15:before,
	.bird--6:before,
	.bird--9:before,
	.bird--18:before{
		top: 10px;
	}
	.bird:after,
	.bird--6:after,
	.bird--12:after,
	.bird--15:after,
	.bird--9:after,
	.bird--18:after{
		top: ${props => props.theme.$sizeh4 + 10}px;
	}
	.bird--3:after{
		left: -10px;
	}
	.bird--3:after{
		top: ${props => props.theme.$sizeh4 + 15}px;
	}
	.bird--1,
	.bird--4,
	.bird--7,
	.bird--10,
	.bird--13,
	.bird--16,
	.bird--19{
		top: ${props => props.theme.$sizeh4}px;
	}
	.bird--2{
		top: ${props => props.theme.$sizeh4 * 2 - 5}px;
	}
	.bird--5{
		top: ${props => props.theme.$sizeh4 * 2 - 3}px;
		left: 25px;
	}
	
	.bird--8,
	.bird--11,
	.bird--14,
	.bird--17,
	.bird--20{
		top: ${props => props.theme.$sizeh4 * 2}px;
	}
	.bird--3,
	.bird--4{
		left: ${props => props.theme.$sizew4}px;
	}
	.bird--6,
	.bird--7,
	.bird--8{
		left: ${props => props.theme.$sizew4 * 2}px;
	}
	.bird--9,
	.bird--10,
	.bird--11{
		left: ${props => props.theme.$sizew4 * 3}px;
	}
	.bird--12,
	.bird--13,
	.bird--14{
		left: ${props => props.theme.$sizew4 * 4}px;
	}
	.bird--15,
	.bird--16,
	.bird--17{
		left: ${props => props.theme.$sizew4 * 3.5}px;
	}
	.bird--20{
		left: ${props => props.theme.$sizew4 * 2 - 10}px;
	}
	.bird--18,
	.bird--19{
		left: ${props => props.theme.$sizew4 * 2.5 - 10}px;
	}
	.bird--30,
	.bird--30:after,
	.bird--30:before{
		left: ${props => props.theme.$sizew4 * 2}px;
		top: 0;
	}
	.bird--30:before{
		top: ${props => props.theme.$sizeh4}px;
	}
	.bird--30:after{
		top: 20px;
	}
		
	.bird--1,
	.bird--1:after,
	.bird--3:before,
	.bird--5,
	.bird--5:after,
	.bird--5:before,
	.bird--7,
	.bird--7:after,
	.bird--7:before,
	.bird--9:before,
	.bird--10,
	.bird--10:after,
	.bird--10:before,
	.bird--14,
	.bird--14:after,
	.bird--14:before,
	.bird--17,
	.bird--17:after,
	.bird--17:before,
	.bird--19,
	.bird--19:after,
	.bird--19:before,
	.bird--18:after,
	.bird--22,
	.bird--22:after,
	.bird--22:before,
	.bird--25,
	.bird--25:after,
	.bird--25:before,
	.bird--28,
	.bird--28:after,
	.bird--28:before,
	.bird--30:after {
		animation-duration: 0.7s;
		animation-delay: -0.5s;
	}
		.bird:after,
		.bird--1:before,
		.bird--2,
		.bird--2:before,
		.bird--2:after,
		.bird--3:after,
		.bird--6,
		.bird--6:after,
		.bird--6:before,
		.bird--8,
		.bird--8:after,
		.bird--8:before,
		.bird--11,
		.bird--11:after,
		.bird--11:before,
		.bird--12,
		.bird--12:after,
		.bird--12:before,
		.bird--16,
		.bird--16:after,
		.bird--16:before,
		.bird--20,
		.bird--20:after,
		.bird--20:before,
		.bird--18:before,
		.bird--23,
		.bird--23:after,
		.bird--23:before,
		.bird--26,
		.bird--26:after,
		.bird--26:before,
		.bird--29,
		.bird--29:after,
		.bird--29:before,
		.bird--30 {
			animation-duration: 0.6s;
			animation-delay: -0.75s;
		}
	} 
  &.active {
    background-color: transparent;
		transition: all 0.2s linear 0.1s;


		.button-bird__text{
			color: ${props => props.color};
			animation: text-fade 1.5s 0.2s;
		}
		.bird--20,
		.bird--19,
		.bird--18,
		.bird--21,
		.bird--23,
		.bird--25,
		.bird--30{
			left: 600px;
			top: -550px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1), top 2s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.5s linear 1.5s;
		}
		.bird--5,
		.bird--17,
		.bird--16,
		.bird--15,
		.bird--22{
			left: 600px;
			top: -600px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.1s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.1s, opacity 0.5s linear 1.6s;
		}
		.bird--14,
		.bird--13,
		.bird--12,
		.bird--24,
		.bird--1{
			left: 650px;
			top: -650px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.15s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.15s, opacity 0.5s linear 1.65s;
		}
		.bird--11,
		.bird--10,
		.bird--9,
		.bird--26,
		.bird--27{
			left: 650px;
			top: -700px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.2s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.2s, opacity 0.5s linear 1.7s;
		}
		.bird--8,
		.bird--7,
		.bird--6,
		.bird--28{
			left: 700px;
			top: -750px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.25s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.25s, opacity 0.5s linear 1.75s;
		}
		.bird,
		.bird--4,
		.bird--29,
		.bird--3{
			left: 750px;
			top: -800px;
			opacity: 0;
			transition: left 2s cubic-bezier(0.42, 0, 0.58, 1) 0.3s, top 2s cubic-bezier(0.42, 0, 0.58, 1) 0.3s, opacity 0.5s linear 1.8s;
		}
		.bird--2{
			left: 850px;
			top: -850px;
			opacity: 0;
			transition: left 1.5s cubic-bezier(0.42, 0, 0.58, 1) 0.35s, top 1.5s cubic-bezier(0.42, 0, 0.58, 1) 0.35s, opacity 0.5s linear 1.8s;
		}
		.bird--5:after,
		.bird--4:after,
		.bird--8:after,
		.bird--14:before,
		.bird--16:after,
		.bird--17:before,
		.bird--21:after,
		.bird--30:after,
		.bird--30:before{
			left: 50px;
			top: -100px;
			transition: all 1s cubic-bezier(0.42, 0, 0.58, 1) -0.3s;
		}
		.bird--4:before,
		.bird--7:before,
		.bird--9:after,
		.bird--12:before,
		.bird--13:before,
		.bird--18:after,
		.bird--27:after,
		.bird--26:before{
			left: -50px;
			top: 0px;
			transition: all ss cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
		}
		.bird:before,
		.bird--2:after,
		.bird--1:after,
		.bird--7:after,
		.bird--8:before,
		.bird--15:after,
		.bird--19:before,
		.bird--22:after,
		.bird--28:after,
		.bird--28:before,
		.bird--3:after{
			left: 100px;
			top: -100px;
			transition: all 1s cubic-bezier(0.42, 0, 0.58, 1) 0s;
		}
		.bird--2:before,
		.bird--1:before,
		.bird--9:before,
		.bird--12:after,
		.bird--13:after,
		.bird--17:after,
		.bird--19:before,
		.bird--23:after,
		.bird--23:before{
			left: 50px;
			top: -10px;
			transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
		}
		.bird:after,
		.bird--6:before,
		.bird--10:after,
		.bird--11:after,
		.bird--16:before,
		.bird--18:before,
		.bird--20:before,
		.bird--24:before,
		.bird--26:after,
		.bird--27:before{
			left: 50px;
			top: 50px;
			transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
		}
		.bird--3:before,
		.bird--6:after,
		.bird--10:before,
		.bird--11:before,
		.bird--14:after,
		.bird--15:before,
		.bird--20:after,
		.bird--22:before,
		.bird--24:after,
		.bird--25:after,
		.bird--25:before,
		.bird--5:before{
			left: 100px;
			top: -10px;
			transition: all 2s cubic-bezier(0.42, 0, 0.58, 1) -0.5s;
		}	
  }
  @keyframes fly-cycle {
	  100% {
	  	mask-position: -360px 0; 
	  } 
	}
	@keyframes text-fade {
	  0% {
	  	color: transparent;
	  	opacity: 1;
	  	top: -50%;
	  	left: auto;
	  }
	  1% {
	  	color: transparent;
	  	opacity: 0;
	  } 
	  50%{
	  	color: transparent;
	  	opacity: 0;
	  }
	  100% {
	  	color: ${props => props.color};
	  	opacity: 1;
	  } 
	}
	@keyframes feather-fade {
	  0% {
	  	top: -100px;
	  	opacity: 0;
	  }
	  25% {
	  	transform: rotate(10deg);
	  	left: 30%;
	  } 
	  50%{
	  	transform: rotate(-5deg);
	  	opacity: 1;
	  	left: 45%;
	  }
	  75%{
	  	transform: rotate(10deg);
	  	left: 32%;
	  }
	  100% {
	  	transform: rotate(0deg);
	  	opacity: 1;
	  	top: 12px;
	  	left: 43%;
	  } 
	}
`;

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  color: ${props => props.color};
  position: absolute;
  z-index: 1000;
  top: 50%;
  margin: 0;
  transform: translateY(-50%);
`;

const Feather = styled.svg`
  position: absolute;
  width: 18%;
  left: 40%;
  top: 12px;
  display: none;
  opacity: 0;
  &.active{
    display: block;
    animation: feather-fade 1.5s linear 0.5s forwards;
  }
`;

const bird_theme = {
  $sizeh4: 25,
  $sizew4: 59,
  $sizew4fore: 118,
  $widthBird2: "60px",
  $widthBird1: "30px",
  $heightBird2: "33px"
};

class Birds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  onBtnClick = (e) =>{
		this.setState({active: !this.state.active}, () => {
			setTimeout(() => {
				if (this.props.onCLick) { this.props.onClick() }
			}, 1000);
		})
	}

  render(){
    return (
			<ThemeProvider theme={bird_theme}>
				<Wrapper color={this.props.btnColor}>
					<ButtonBird color={this.props.btnColor} onClick={() => this.onBtnClick()} className={this.state.active ? "active" : ''}>
						<Text color={this.props.textColor}>{this.state.active ? this.props.label.done : this.props.label.init}</Text>
						<Feather version="1.1" x="0px" y="0px" viewBox="0 0 75 38" className={this.state.active ? "active" : ''}>
							<style>
								enable-background:new 0 0 75 38;
							</style>
							<g>
									<path d="M20.8,31.6c3.1-0.7,2.9-2.3,2,1c9.1,4.4,20.4,3.7,29.1-0.8l0,0c0.7-2.1,1-3.9,1-3.9c0.6,0.8,0.8,1.7,1,2.9
											c4.1-2.3,7.6-5.3,10.2-8.3c0.4-2.2,0.4-4,0.4-4.1c0.6,0.4,0.9,1.2,1.2,2.1c4.5-6.1,5.4-11.2,3.7-13.5c1.1-2.6,1.6-5.4,1.2-7.7
											c-0.5,2.4-1.2,4.7-2.1,7.1c-5.8,11.5-16.9,21.9-30.3,25.3c13-4,23.6-14.4,29.1-25.6C62.8,9,55.6,16.5,44.7,20.7
											c2.1,0.7,3.5,1.1,3.5,1.6c-0.1,0.4-1.3,0.6-3.2,0.4c-7-0.9-7.1,1.2-16,1.5c1,1.3,2,2.5,3.1,3.6c-1.9-0.9-3.8-2.2-5.6-3.6
											c-0.9,0.1-10.3,4.9-22.6-12.3C5.9,17.7,11.8,26.9,20.8,31.6z"/>
							</g>
						</Feather>
						<span className="bird"></span>
						<span className="bird--1"></span>
						<span className="bird--2"></span>
						<span className="bird--3"></span>
						<span className="bird--4"></span>
						<span className="bird--5"></span>
						<span className="bird--6"></span>
						<span className="bird--7"></span>
						<span className="bird--8"></span>
						<span className="bird--9"></span>
						<span className="bird--10"></span>
						<span className="bird--11"></span>
						<span className="bird--12"></span>
						<span className="bird--13"></span>
						<span className="bird--14"></span>
						<span className="bird--15"></span>
						<span className="bird--16"></span>
						<span className="bird--17"></span>
						<span className="bird--18"></span>
						<span className="bird--19"></span>
						<span className="bird--20"></span>
						<span className="bird--21"></span>
						<span className="bird--22"></span>
						<span className="bird--23"></span>
						<span className="bird--24"></span>
						<span className="bird--25"></span>
						<span className="bird--26"></span>
						<span className="bird--27"></span>
						<span className="bird--28"></span>
						<span className="bird--29"></span>
						<span className="bird--30"></span>
					</ButtonBird>
				</Wrapper>
			</ThemeProvider>
    )
	}
}

Birds.defaultProps = {
	btnColor: "#000",
	textColor: "#EFEFEF",
	label: {
		init: "SEND", 
		done: "DONE"
	}
};

export default Birds;