import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import BlogCard from './BlogCard';

function Blog(props) {
  const { blogs } = props;

  return (
    <main className="blog">
      <div className="blog__welcome">
        <img src="" alt="" />
        <h1>Why You Should Wear SPF in Winter</h1>
      </div>
      <section className="blog__main">
        <div className="blog__info">
          <p></p>
          <h2></h2>
          <p></p>
          <p></p>
          <h2></h2>
          <p></p>
          <h2></h2>
          <p></p>
          <ul>
            <li></li>
          </ul>
          <p></p>
          <p></p>
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

export default Blog;
