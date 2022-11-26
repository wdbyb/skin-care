import Category from './Categories';

function Home() {
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
    </main>
  );
}

export default Home;
