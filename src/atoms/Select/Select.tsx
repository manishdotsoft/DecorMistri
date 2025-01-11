import { SelectFieldParent, SelectOption, Option } from './Select.styled';
import useCustomSelect from './Select.hook';

type SelectProps = {
  label?: string;
  value?: string;
  backgroundColor?: string;
  options: string[];
  onChange: (value: string) => void;
};

const SelectOptions = ({
  label,
  value,
  backgroundColor,
  options,
  onChange,
}: SelectProps) => {
  const { selectedValue, handleSelectChange } = useCustomSelect({
    options,
    initialValue: value,
    onChange,
  });

  return (
    <SelectFieldParent style={{ backgroundColor }}>
      {label && <label>{label}</label>}
      <SelectOption
        as="select"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </SelectOption>
    </SelectFieldParent>
  );
};

export default SelectOptions;
