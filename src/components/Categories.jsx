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

function Categories() {
  const data = [
    {
      title: 'Cleaners',
      src: 'category-cleaners.png',
    },
    {
      title: 'Moisturizes',
      src: 'category-moisturizes.png',
    },
    {
      title: 'Eye Treatment',
      src: 'category-eye-treatment.png',
    },
    {
      title: 'Treatment',
      src: 'category-treatment.png',
    },
    {
      title: 'Tools',
      src: 'category-tools.png',
    },
  ];

  return (
    <section className="categories">
      <h2 className="categories__title heading-secondary">
        Shop by categories
      </h2>
      <ul className="categories__list">
        {data.map((item) => (
          <li className="categories__item">
            <Category {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
