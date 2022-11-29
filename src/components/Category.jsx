function Category(props) {
  const { title, src } = props;

  return (
    <a className="category">
      <div className="category__img">
        <img width="166" height="166" src={`./src/assets/${src}`} alt={title} />
      </div>
      <h3 className="category__title">{title}</h3>
    </a>
  );
}

export default Category;
