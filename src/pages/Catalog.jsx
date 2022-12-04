import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Dropdown from 'react-bootstrap/Dropdown';
import Product from '../components/Product';
import BlogCard from '../components/BlogCard';
import { filtersMarkupData } from '../data';

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

  const [filters, setFilters] = useState({});
  const [category, setCategory] = useState({});
  const [products, setProducts] = useState(bestsellers);

  const handleCatagoryChange = (e) => {
    if (e.target.name === 'all') {
      setCategory({});
      return;
    }

    if (!category[e.target.name]) {
      setCategory((prev) => ({ ...prev, [e.target.name]: e.target.name }));
    } else {
      setCategory((prev) => {
        const newData = { ...prev };
        delete newData[e.target.name];

        return newData;
      });
    }
  };

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setFilters((prev) => ({ ...prev, [e.target.name]: e.target.name }));
    } else {
      setFilters((prev) => {
        const newData = { ...prev };
        delete newData[e.target.name];

        return newData;
      });
    }
  };

  const sortArray = (arr) => {
    const sortChecker = (item, checker) => {
      for (let key in checker) {
        if (item.filters) {
          if (item.filters.indexOf(key) < 0) {
            return false;
          }
        } else {
          return false;
        }
      }
      return true;
    };

    const needles = arr.filter((item) => {
      return sortChecker(item, filters) && sortChecker(item, category);
    });

    setProducts(needles);
  };

  useEffect(() => {
    sortArray(bestsellers);
  }, [filters, category]);

  const buttons = [
    'All',
    'Bestsellers',
    'Cleaners',
    'Moisturizes',
    'Eye treatment',
    'Treatment',
    'Tools',
  ];

  return (
    <main className="catalog paragraph">
      <h1 className="visually-hidden">Products</h1>
      <h2 className="catalog__title heading-primary">All</h2>
      <div className="catalog__categories">
        {buttons.map((item) => (
          <input
            type="button"
            name={item.toLowerCase()}
            value={item}
            onClick={handleCatagoryChange}
          />
        ))}
      </div>
      <div className="catalog__main">
        <div className="filters">
          <h2 className="heading-tertiary">Filters</h2>
          {filtersMarkupData.map((item) => (
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
            <>
              <ul className="catalog__list">
                {products.map((item) => (
                  <Product {...item} />
                ))}
              </ul>
              <div className="catalog__pagination">Page 1</div>
            </>
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
