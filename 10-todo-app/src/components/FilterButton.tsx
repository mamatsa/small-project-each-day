interface FilterButtonProps {
  title: string;
  filter: string;
  onFilter: (option: string) => void;
}

const FilterButton = ({ filter, title, onFilter }: FilterButtonProps) => {
  return (
    <button
      className={`${
        filter === title
          ? "text-bright-blue"
          : "hover:text-l-very-dark-grayish-blue dark:hover:text-d-light-grayish-blue-hover"
      }`}
      onClick={() => {
        onFilter(title);
      }}
    >
      {title}
    </button>
  );
};

export default FilterButton;
