import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import BlogCard from './BlogCard';
import Product from './Product';

function Blog(props) {
  const { blogs, bestsellers } = props;

  return (
    <main className="blog">
      <div className="blog__welcome">
        <img src="../src/assets/blog-welcome-1.jpg" alt="" />
        <div className="blog__welcome-wrapper">
          <h1 className="blog__title-primary heading-primary">
            Why You Should Wear SPF in Winter
          </h1>
        </div>
      </div>
      <section className="blog__main">
        <div className="blog__info">
          <div className="blog__div">
            <p className="heading-tertiary bold-600">
              If you’re not as totally obsessed with skincare as we are at team
              Face The Future, then you might not be completely clued up on SPF
              – specifically, when you should be wearing it. If you’re of the
              thinking that SPF is for summer or those bright sunny days only,
              then don’t worry, you’re not on your own. But the truth is, we
              should all be protecting our skin with a good quality sunscreen
              every single day – whatever the weather.
            </p>
          </div>
          <div className="blog__div">
            <h2 className="heading-tertiary uppercase">
              What's the difference between
            </h2>
            <p className="paragraph">
              Ultraviolet B (UVB) is a high energy ray which penetrates and
              burns the epidermis of your skin.UVA is a lower energy ray that
              penetrates deeper into the dermis of your skin, causing damage to
              your structural collagen and leading to premature skin ageing.
            </p>
            <p className="paragraph">
              UVA and UVB rays both cause damage to your cells, and to your DNA,
              which leads to accelerated skin ageing and the appearance of lines
              and wrinkles, along with hyperpigmentation and thickened skin
              texture. UVA and UVB rays can also lead to the development of skin
              cancer, which is why it’s so important to protect your skin
              against them.
            </p>
          </div>
          <div className="blog__div">
            <h2 className="heading-tertiary uppercase">
              What does broad spectrum mean?
            </h2>
            <p className="paragraph">
              Broad spectrum means that your sunscreen protects against both UVA
              and UVB rays.
            </p>
          </div>
          <div className="blog__div">
            <h2 className="heading-tertiary uppercase">
              What sun protection factor do i need?
            </h2>
            <p className="paragraph">
              You should always wear a minimum of SPF30 in a broad-spectrum
              formula – as this blocks out approximately 97% of UV rays.
              Sometimes people can get a little confused and think that SPF30
              means that they have 30% protection, however, that’s not the case
              – it simply stands for the level of defence against UVB rays.
            </p>
            <ul className="blog__list paragraph">
              <li>SPF15 blocks around 93% of UVB rays</li>
              <li>SPF30 blocks around 97% of UVB rays</li>
              <li>SPF50 blocks around 98% of UVB rays</li>
              <li>SPF100 blocks around 99% of UVB rays</li>
            </ul>
            <p className="paragraph">
              It’s important to note that although sunscreens can block up to
              99% of UV rays, they only block out around 55% of the free
              radicals that are produced from UV exposure.
            </p>
            <p className="paragraph">
              So, which Colorescience products will you be using for your
              sunscreen in winter? Will it be one of our mineral powder formulas
              or a classic liquid sunscreen? No matter which Colorescience
              products you choose, you can rest assured that we’ve used natural,
              safe ingredients that will help protect you throughout the cold
              and warm months.
            </p>
          </div>
        </div>
        <article className="blog__products">
          <h2 className="blog__products-title heading-secondary">
            Used products
          </h2>
          {bestsellers && (
            <ul className="blog__products-list">
              {bestsellers.slice(0, 3).map((item) => (
                <Product {...item} button={false} />
              ))}
            </ul>
          )}
        </article>
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
