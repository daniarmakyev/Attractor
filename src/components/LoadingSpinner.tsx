import React from "react";

const LoadingSpinner: React.FC = () => {

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-16 h-16 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
