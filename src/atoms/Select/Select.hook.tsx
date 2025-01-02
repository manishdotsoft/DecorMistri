import { useState } from "react";

type UseCustomSelectProps = {
  options: string[];
  initialValue?: string;
  onChange: (value: string) => void;
};

type UseCustomSelectReturn = {
  selectedValue: string;
  handleSelectChange: (event: any) => void;
};

const useCustomSelect = ({
  options,
  initialValue,
  onChange,
}: UseCustomSelectProps): UseCustomSelectReturn => {
  const [selectedValue, setSelectedValue] = useState(
    initialValue || options[0]
  );

  const handleSelectChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  };

  return { selectedValue, handleSelectChange };
};

export default useCustomSelect;
