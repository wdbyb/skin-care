function ArticleCard(props) {
  const { img, title, button } = props;

  return (
    <article className="article-card">
      <div className="article-card__img">
        <img src={`./src/assets/${img}`} alt="" />
      </div>
      <h2 className="article-card__title">
        {title.start}
        <span>{title.emp}</span>
        {title.end}
      </h2>
      <button className="button button--secondary button--small" type="button">
        {button}
      </button>
    </article>
  );
}

export default ArticleCard;
