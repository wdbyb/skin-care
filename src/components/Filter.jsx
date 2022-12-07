function Filter(props) {
  const { title, checkboxes, onChange } = props;

  return (
    <div className="filters__item filter">
      <h3 className="heading-tertiary uppercase">{title}</h3>
      {checkboxes && (
        <div className="filter__list">
          {checkboxes.map((item) => {
            const lower = item.toLowerCase();

            return (
              <div className="filter__item">
                <input
                  onChange={onChange}
                  type="checkbox"
                  name={lower}
                  id={`filter-${lower}`}
                />
                <label htmlFor={`filter-${lower}`}>{item}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Filter;
