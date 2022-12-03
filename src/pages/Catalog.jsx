import Dropdown from 'react-bootstrap/Dropdown';
import Product from '../components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import BlogCard from '../components/BlogCard';

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

function Catalog(props) {
  const { bestsellers, blogs } = props;

  const filter = {
    // normal: 'normal',
    // combination: 'combination',
  };

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      filter[e.target.name] = e.target.name;
    } else {
      delete filter[e.target.name];
    }

    console.log(filter);
  };

  const bar = (arr) => {
    const needles = arr.filter(function (item) {
      for (let key in filter) {
        if (item.filters) {
          if (item.filters.indexOf(key) < 0) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    });

    console.log(needles);
  };

  // const value = 'oily';

  // filter[value] = value;

  console.log(filter);

  const buttons = [
    'All',
    'Bestsellers',
    'Cleaners',
    'Moisturizes',
    'Eye treatment',
    'Treatment',
    'Tools',
  ];

  const filters = [
    {
      title: 'Skin Type',
      checkboxes: ['Combination', 'Normal', 'Oily', 'Dry', 'Sensitive'],
    },
    {
      title: 'Concern',
      checkboxes: ['Acne', 'Dryness', 'Oiliness', 'Dullness', 'Dehydration'],
    },
  ];

  return (
    <main className="catalog paragraph">
      <h1 className="visually-hidden">Products</h1>
      <h2 className="catalog__title heading-primary">All</h2>
      <div className="catalog__categories">
        {buttons.map((item) => (
          <button type="button">{item}</button>
        ))}
      </div>
      <div className="catalog__main">
        <div className="filters">
          <h2 className="heading-tertiary">Filters</h2>
          {filters.map((item) => (
            <Filter {...item} onChange={handleFilterChange} />
          ))}
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="foo"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="catalog__list-pagination">
            {bestsellers && (
              <>
                <ul className="catalog__list">
                  {bestsellers.map((item) => (
                    <Product {...item} />
                  ))}
                </ul>
                <div className="catalog__pagination">Page 1</div>
              </>
            )}
          </div>
        </div>
      </div>
      <section className="blog-list">
        <h2 className="heading-secondary">Our Blog</h2>
        <div className="blog-list__swiper swiper-primary">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
            navigation={{
              clickable: true,
              nextEl: '.blog-list__swiper .swiper-button-next',
              prevEl: '.blog-list__swiper .swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.blog-list__swiper .swiper-pagination',
            }}
          >
            {blogs.map((item) => {
              return (
                <SwiperSlide>
                  <BlogCard {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
