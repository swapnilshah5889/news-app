import { ThreeCircles } from "react-loader-spinner";

const MyLoader = () => {
  return (
    <ThreeCircles
        height="70"
        width="70"
        outerCircleColor="#5555cc"
        innerCircleColor="#800080"
        middleCircleColor="#00FFFF"
    />
  )
}

export default MyLoader;