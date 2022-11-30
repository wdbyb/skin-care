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

export default Product;
