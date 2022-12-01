import { Link } from 'react-router-dom';

function BlogCard(props) {
  const { img, title, id } = props;

  return (
    <Link to={`/blog/${id}`}>
      <div className="blog-card">
        <div className="blog-card__image">
          <img src={`../src/assets/${img}`} alt="" />
        </div>
        <h3 className="blog-card__title">{title}</h3>
      </div>
    </Link>
  );
}

export default BlogCard;
