import { ThreeCircles } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#244d3f"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
