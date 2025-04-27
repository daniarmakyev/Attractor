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
  return (
    <input
      value={value}
      className="mt-2 text-base border focus:outline-none border-white/80 rounded-lg p-2 bg-transparent w-full"
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(name, e.target.value);
      }}
    />
  );
};

export default ProfileInput;
