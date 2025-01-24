import { useState, ChangeEvent } from "react";

const useHeaderFilterHooks = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDesignType, setSelectedDesignType] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const designOptions = [
    {
      value: "commercial",
      label: "Commercial Design",
      subcategories: [
        "Office Spaces",
        "Retail Spaces",
        "Hospitality Spaces",
        "Entertainment Spaces",
      ],
    },
    {
      value: "residential",
      label: "Residential Design",
      subcategories: [
        "Living Areas",
        "Bedrooms",
        "Dining Areas",
        "Kitchens",
        "Bathrooms",
        "Outdoor Spaces",
      ],
    },
    {
      value: "industrial",
      label: "Industrial Design",
      subcategories: [
        "Manufacturing Areas",
        "Storage Areas",
        "Service Areas",
        "Admin Spaces",
        "Specialized Areas",
      ],
    },
    {
      value: "institutional",
      label: "Institutional Design",
      subcategories: [
        "Educational Spaces",
        "Healthcare Spaces",
        "Cultural Spaces",
        "Religious Spaces",
        "Government Spaces",
      ],
    },
    {
      value: "mixed-use",
      label: "Mixed-Use Design",
      subcategories: [
        "Residential Components",
        "Commercial Components",
        "Shared Amenities",
        "Public Spaces",
      ],
    },
    {
      value: "landscape",
      label: "Landscape Design",
      subcategories: [
        "Residential Landscaping",
        "Commercial Landscaping",
        "Urban Landscaping",
        "Environmental Spaces",
        "Specialized Areas",
      ],
    },
  ];

  const dateOptions = [
    { value: "start-date", label: "Start Date" },
    { value: "end-date", label: "End Date" },
  ];

  const selectedDesignTypeObj = designOptions.find(
    (option) => option.value === selectedDesignType
  );
  const subcategoryOptions = selectedDesignTypeObj
    ? selectedDesignTypeObj.subcategories.map((subcategory) => ({
        value: subcategory.toLowerCase(),
        label: subcategory,
      }))
    : [];

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleDesignTypeChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedDesignType(event.target.value as string);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedSubcategory(event.target.value as string);
  };

  const handleDateChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedDate(event.target.value as string);
  };

  return {
    searchValue,
    setSearchValue,
    selectedDesignType,
    handleSearchChange,
    handleDesignTypeChange,
    selectedSubcategory,
    handleSubcategoryChange,
    selectedDate,
    handleDateChange,
    designOptions,
    dateOptions,
    subcategoryOptions,
  };
};

export default useHeaderFilterHooks;
