import Category from './Categories';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

function Product(props) {
  const { img, title, size, price } = props;

  return (
    <div className="bestsellers__item">
      <div className="bestsellers__image">
        <img src={`./src/assets/${img}`} alt="" />
      </div>
      <h3 className="bestsellers__title">{title}</h3>
      <p className="bestsellers__size-price">
        <span className="bestsellers__size">{size}</span>
        <span className="bestsellers__price">{price}</span>
      </p>
      <button className="button button--primary button--small" type="button">
        Add Cart
      </button>
    </div>
  );
}

function Home() {
  const bestsellersData = [
    {
      img: 'image-bestseller-1.png',
      title: 'Retinol 0.8% in Squalane Rose extract',
      price: '$19',
      size: '50 ml',
    },

    {
      img: 'image-bestseller-2.png',
      title: 'Glycolic Acid 7% + B12 Exfoliating Toning',
      price: '$34',
      size: '200 ml',
    },
    {
      img: 'image-bestseller-3.png',
      title: '100% Organic Cold-Pressed Seed Oil',
      price: '$29',
      size: '50 ml',
    },
    {
      img: 'image-bestseller-1.png',
      title: 'Retinol 0.8% in Squalane Rose extract',
      price: '$19',
      size: '50 ml',
    },
  ];

  const advantagesData = [
    {
      title: 'Cleansing',
      desc: 'We provide you with the best substances for washing your face',
      img: {
        width: 122,
        height: 144,
        src: 'icon-cleansing.svg',
      },
    },
    {
      title: 'Toning',
      desc: 'We use only proven recipes to balance your microflora skin',
      img: {
        width: 125,
        height: 150,
        src: 'icon-toning.svg',
      },
    },
    {
      title: 'Moisturizing',
      desc: 'We prepared verified formulas for hydrating and softening your skin',
      img: {
        width: 141,
        height: 141,
        src: 'icon-moisturizing.svg',
      },
    },
  ];

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
            {advantagesData.map((item) => {
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
              {bestsellersData.map((item) => {
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
            {bestsellersData.map((item) => {
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
      </section>
    </main>
  );
}

export default Home;
