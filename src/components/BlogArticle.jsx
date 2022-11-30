function BlogArticle(props) {
  const { img, title } = props;

  return (
    <div className="bestsellers__item">
      <div className="bestsellers__image">
        <img src={`./src/assets/${img}`} alt="" />
      </div>
      <h3 className="bestsellers__title">{title}</h3>
    </div>
  );
}

export default BlogArticle;
