import { DoubleLoadingSpinner } from "./LoadingSpinner.style";
interface I_Loader {
  innerSize: string;
  outerSize: string;
  color: string;
}
const LoadingSpinner = ({ innerSize, outerSize, color }: I_Loader) => {
  return (
    <DoubleLoadingSpinner
      color={color}
      innerSize={innerSize}
      outerSize={outerSize}
    />
  );
};

export default LoadingSpinner;
