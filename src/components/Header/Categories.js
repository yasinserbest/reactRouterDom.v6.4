import { Link } from "react-router-dom";
import "./Categories.scss";
function Categories() {
  return (
    <nav className="navbar">
      <ul className="categories">
        <li className="categories__item">
          <span className="categories__item--title">Electronics</span>
          <ul className="category">
            <Link to="category/smartphones" className="category__item">
              Smartphones
            </Link>
            <Link to="category/laptops" className="category__item">
              Laptops
            </Link>
          </ul>
        </li>
        <li className="categories__item">
          <span className="categories__item--title">Men</span>
          <ul className="category">
            <Link to="category/mens-shirts" className="category__item">
              Shirts
            </Link>
            <Link to="category/mens-shoes" className="category__item">
              Shoes
            </Link>
            <Link to="category/mens-watches" className="category__item">
              Watches
            </Link>
          </ul>
        </li>
        <li className="categories__item">
          <span className="categories__item--title">Women</span>
          <ul className="category">
            <Link to="category/womens-dresses" className="category__item">
              Dresses
            </Link>
            <Link to="category/womens-shoes" className="category__item">
              Shoes
            </Link>
            <Link to="category/womens-watches" className="category__item">
              Watches
            </Link>
            <Link to="category/womens-bags" className="category__item">
              Bags
            </Link>
            <Link to="category/womens-jewellery" className="category__item">
              Jewellery
            </Link>
          </ul>
        </li>
        <li className="categories__item">
          <span className="categories__item--title">Beauty</span>
          <ul className="category">
            <Link to="category/fragrances" className="category__item">
              Fragrances
            </Link>
            <Link to="category/skincare" className="category__item">
              Skincare
            </Link>
          </ul>
        </li>

        <li className="categories__item">
          <span className="categories__item--title">Home - Decoration</span>
          <ul className="category">
            <Link to="category/furniture" className="category__item">
              Furniture
            </Link>
            <Link to="category/lighting" className="category__item">
              Lighting
            </Link>
          </ul>
        </li>
        <li className="categories__item">
          <span className="categories__item--title">Tops</span>
          <ul className="category">
            <Link to="category/sunglasses" className="category__item">
              Sunglasses
            </Link>
            <Link to="category/tops" className="category__item">
              Tops
            </Link>
          </ul>
        </li>
        <li className="categories__item">
          <span className="categories__item--title">Other</span>
          <ul className="category">
            <Link to="category/automotive" className="category__item">
              Automotive
            </Link>
            <Link to="category/motorcycle" className="category__item">
              Motorcycle
            </Link>
            <Link to="category/groceries" className="category__item">
              Groceries
            </Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Categories;
