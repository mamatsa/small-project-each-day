interface FilterButtonProps {
  title: string;
  filter: string;
  onFilter: (option: string) => void;
}

const FilterButton = ({ filter, title, onFilter }: FilterButtonProps) => {
  return (
    <button
      className={`${filter === title && "text-bright-blue"}`}
      onClick={() => {
        onFilter(title);
      }}
    >
      {title}
    </button>
  );
};

export default FilterButton;
