import { useState } from "react";

const ProfileInput = ({
  value,
  name,
  placeholder,
  onChange,
}: {
  value: string;
  name: string;
  placeholder: string;
  onChange: (field: string, value: string) => void;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <>
      <div className="transform w-full">
        <input
          value={value}
          className="mt-2 text-base border focus:outline-none border-white/80 rounded-lg p-2 bg-transparent w-full  "
          name={name}
          placeholder={placeholder}
          autoComplete="off"
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          onFocus={handleMouseEnter}
        />
        {isAnimating && (
          <span
            className="absolute bottom-0 left-0 w-6 h-[80%] bg-white bg-opacity-60 transform -skew-x-12 animate-shine"
            onAnimationEnd={handleAnimationEnd}
          />
        )}
      </div>
    </>
  );
};

export default ProfileInput;
