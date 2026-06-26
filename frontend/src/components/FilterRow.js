import ThemeButton from './ThemeButton';

function FilterRow({ filters }) {
  return (
    <div className="filter-row" aria-label="Search and filters">
      {filters.map((filter) => (
        <ThemeButton key={filter} variant="filter" type="button">
          {filter}
        </ThemeButton>
      ))}
    </div>
  );
}

export default FilterRow;