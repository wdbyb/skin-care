function Product(props) {
  const { img, title, size, price } = props;

  return (
    <div className="product">
      <div className="product__image">
        <img src={`./src/assets/${img}`} alt="" />
      </div>
      <h3 className="product__title">{title}</h3>
      <p className="product__size-price">
        <span className="product__size">{size}</span>
        <span className="product__price">{price}</span>
      </p>
      <button className="button button--primary button--small" type="button">
        Add Cart
      </button>
    </div>
  );
}

export default Product;
