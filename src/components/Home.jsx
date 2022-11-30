import Category from './Categories';
import BlogArticle from './BlogArticle';
import Product from './Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

function Home(props) {
  const { blogs, bestsellers, advantages } = props;

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
            <button
              className="button button--primary button--medium"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <Category />
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
        <article className="articles__item">
          <div className="articles__img">
            <img src="./src/assets/image-article-1.jpg" alt="" />
          </div>
          <h2 className="articles__title">
            We’ve taken care of <span>every</span> skin type
          </h2>
          <button
            className="button button--secondary button--small"
            type="button"
          >
            Find more
          </button>
        </article>
        <article className="articles__item">
          <div className="articles__img">
            <img src="./src/assets/image-article-2.jpg" alt="" />
          </div>
          <h2 className="articles__title">
            Get <span>personal advices</span> for your skin
          </h2>
          <button
            className="button button--secondary button--small"
            type="button"
          >
            Consultate
          </button>
        </article>
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
      <section className="blog">
        <h2 className="heading-secondary">Our Blog</h2>
        <div className="blog__swiper swiper-primary">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
            navigation={{
              clickable: true,
              nextEl: '.blog__swiper .swiper-button-next',
              prevEl: '.blog__swiper .swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.blog__swiper .swiper-pagination',
            }}
          >
            {blogs.map((item) => {
              return (
                <SwiperSlide>
                  <BlogArticle {...item} />
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
