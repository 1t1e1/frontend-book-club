import { keyframes } from "@mui/material";
import { styled } from "@mui/system";

const InLeft = keyframes`
  0% {
    opacity: 0;
   -webkit-transform: translate3d(-20%,0%,0);
   transform: translate3d(-20%,0%,0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

const OutLeft = keyframes`
  0% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    opacity: 0;
   -webkit-transform: translate3d(-20%,0%,0);
   transform: translate3d(-20%,0%,0);
  }
`;

const OutRight = keyframes`
  0% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  100% {
    opacity: 0;
   -webkit-transform: translate3d(20%,0%,0);
   transform: translate3d(20%,0%,0);
  }
`;

const InRight = keyframes`
  0% {
    opacity: 0;
   -webkit-transform: translate3d(20%,0%,0);
   transform: translate3d(20%,0%,0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
`;

const Container = styled("div")(({ isVisible, left }) => ({
	animation: left
		? `${isVisible ? InLeft : OutLeft} 1.6s both`
		: `${isVisible ? InRight : OutRight} 1.6s both`,
}));

export default Container;
