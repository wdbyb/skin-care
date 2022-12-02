import Category from './Category';

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
    <section className="categories" id="categories">
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
