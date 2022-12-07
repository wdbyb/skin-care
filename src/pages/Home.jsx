import Categories from '../components/Categories';
import BlogCard from '../components/BlogCard';
import Product from '../components/Product';
import ArticleCard from '../components/ArticleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

function Home(props) {
  const { blogs, bestsellers, advantages, articleCards } = props;

  return (
    <main className="home">
      <section className="welcome">
        <div className="welcome__bg">
          <img src="./src/assets/image-welcome.jpg" alt="Skin care product" />
        </div>
        <div className="welcome__wrapper">
          <div className="welcome__info">
            <h1 className="welcome__title">Skin care</h1>
            <p className="welcome__desc">
              Cleaners, moisturizers, treatments and more
            </p>
            <Link
              className="button button--primary button--medium"
              type="button"
              to="/catalog"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
      <Categories />
      <section className="advantages">
        <div className="advantages__wrapper">
          <h2 className="advantages__title heading-secondary">
            Full cycle of skin care routine
          </h2>
          <ul className="advantages__list">
            {advantages.map((item) => {
              const { title, desc, img } = item;

              return (
                <li className="advantages__item">
                  <div className="advantages__img advantages__img--cleansing">
                    <img
                      width={img.width}
                      height={img.height}
                      src={`./src/assets/${img.src}`}
                      alt=""
                    />
                  </div>
                  <h3 className="advantages__item-title">{title}</h3>
                  <p>{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="articles">
        {articleCards.map((item) => (
          <ArticleCard {...item} />
        ))}
      </section>
      <section className="bestsellers">
        <div className="bestsellers__wrapper">
          <h2 className="heading-secondary">Bestsellers</h2>
          <div className="bestsellers__swiper swiper-primary">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={3}
              navigation={{
                clickable: true,
                nextEl: '.bestsellers__swiper .swiper-button-next',
                prevEl: '.bestsellers__swiper .swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.bestsellers__swiper .swiper-pagination',
              }}
            >
              {bestsellers.map((item) => {
                return (
                  <SwiperSlide>
                    <Product {...item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
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

export default Home;
