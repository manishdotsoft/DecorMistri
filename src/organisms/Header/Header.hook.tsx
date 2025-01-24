import { useState, useMemo } from "react";

interface DesignOption {
  value: string;
  label: string;
  subcategories: string[];
}

interface UseHeaderFilterProps {
  designOptions: DesignOption[];
}

interface UseHeaderFilterReturn {
  selectedOption: string;
  values: {
    designType: string;
    subcategories: string[];
  };
  handleOptionChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleSubcategoriesChange: (
    event: React.ChangeEvent<{ value: unknown }>
  ) => void;
  filteredSubcategories: string[];
}

const useHeaderFilter = ({
  designOptions,
}: UseHeaderFilterProps): UseHeaderFilterReturn => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [values, setValues] = useState({
    designType: "",
    subcategories: [] as string[],
  });

  const handleOptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    setSelectedOption(selectedValue);
    setValues({ designType: selectedValue, subcategories: [] });
  };

  const handleSubcategoriesChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const selectedSubcategories = event.target.value as string[];
    setValues((prev) => ({ ...prev, subcategories: selectedSubcategories }));
  };

  const filteredSubcategories = useMemo(() => {
    return (
      designOptions.find((option) => option.value === values.designType)
        ?.subcategories || []
    );
  }, [values.designType, designOptions]);

  return {
    selectedOption,
    values,
    handleOptionChange,
    handleSubcategoriesChange,
    filteredSubcategories,
  };
};

export default useHeaderFilter;
