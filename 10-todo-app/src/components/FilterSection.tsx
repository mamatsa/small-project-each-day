import FilterButton from "./FilterButton";

interface FilterSectionProps {
  filter: string;
  onFilter: (option: string) => void;
  isDisplayMobile: boolean;
}

const FilterSection = ({
  filter,
  onFilter,
  isDisplayMobile,
}: FilterSectionProps) => {
  return (
    <div
      className={`items-center justify-center gap-4 font-bold ${
        isDisplayMobile
          ? "mx-auto flex max-w-screen-sm rounded-md bg-white p-4 text-l-dark-grayish-blue shadow-md sm:hidden dark:bg-d-very-dark-desaturated-blue"
          : "hidden sm:flex"
      }`}
    >
      <FilterButton title="All" filter={filter} onFilter={onFilter} />
      <FilterButton title="Active" filter={filter} onFilter={onFilter} />
      <FilterButton title="Completed" filter={filter} onFilter={onFilter} />
    </div>
  );
};

export default FilterSection;
