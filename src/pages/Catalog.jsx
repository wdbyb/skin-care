import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Dropdown from 'react-bootstrap/Dropdown';
import Product from '../components/Product';
import BlogCard from '../components/BlogCard';
import { filtersMarkupData } from '../data';
import Filter from '../components/Filter';

function Catalog(props) {
  const { catalogProducts, blogs } = props;

  const [filters, setFilters] = useState({});
  const [category, setCategory] = useState({});
  const [catalogTitle, setCatalogTitle] = useState('All');
  const [products, setProducts] = useState(catalogProducts);
  const [sort, setSort] = useState('price');

  const handleDropdownClick = (e) => {
    setSort(e.target.text.toLowerCase());
  };

  const handleCatagoryChange = (e) => {
    if (e.target.name === 'all') {
      setCategory({});
      setCatalogTitle('All');
      return;
    }

    if (!category[e.target.name]) {
      setCategory(() => ({ [e.target.name]: e.target.name }));
      setCatalogTitle(
        e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)
      );
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

    const sorted = needles.sort((a, b) => {
      switch (sort) {
        case 'price':
          return +b.price.replace(/\D/g, '') - +a.price.replace(/\D/g, '');
        case 'sells':
          return +a.price.replace(/\D/g, '') - +b.price.replace(/\D/g, '');
        case 'a-z':
          return a.title
            .replace(/[^a-zA-Z]+/g, '')[0]
            .localeCompare(b.title.replace(/[^a-zA-Z]+/g, '')[0]);
      }
    });

    setProducts(sorted);
  };

  useEffect(() => {
    sortArray(catalogProducts);
  }, [filters, category, sort]);

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
      <h2 className="catalog__title heading-primary">{catalogTitle}</h2>
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
        <div className="catalog__products">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="foo">
              <b>Sort by: </b>
              <span>{sort.charAt(0).toUpperCase() + sort.slice(1)}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleDropdownClick}>Price</Dropdown.Item>
              <Dropdown.Item onClick={handleDropdownClick}>Sells</Dropdown.Item>
              <Dropdown.Item onClick={handleDropdownClick}>A-Z</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="catalog__list-pagination">
            <>
              <div className="catalog__list">
                {products.map((item) => (
                  <Product {...item} />
                ))}
              </div>
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
