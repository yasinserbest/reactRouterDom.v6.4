import { useState } from "react";
import { getAuthToken } from "../../util/auth";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const token = getAuthToken();

  const [accountLogo, setAccountLogo] = useState(<RiAccountCircleLine />);
  const [favoriteLogo, setfavoriteLogo] = useState(<MdFavoriteBorder />);
  const navigate = useNavigate();
  function logoutHandler(e) {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://logowik.com/content/uploads/images/trendyolcom2977.jpg"
          alt=""
        />
      </div>

      <ul className="header__mainList">
        {token ? (
          <li
            onMouseEnter={() => setAccountLogo(<RiAccountCircleFill />)}
            onMouseLeave={() => setAccountLogo(<RiAccountCircleLine />)}
            className="header__innerList"
          >
            <span className="header__mainList--mainItem">
              {accountLogo} Account
            </span>
            <ul className="header__subList">
              <li>
                <Link className="header__subList--subItem" to="/products/add">
                  Add Product
                </Link>
              </li>
              <li>
                <Link className="header__subList--subItem" to="/">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="header__subList--subItem" to="/">
                  Orders
                </Link>
              </li>
              <li>
                <span
                  onClick={logoutHandler}
                  className="header__subList--subItem"
                >
                  Sign Out
                </span>
              </li>
            </ul>
          </li>
        ) : (
          <li>
            <Link className="header__mainList--mainItem" to="/login">
              LOGIN
            </Link>
          </li>
        )}
        <li
          onMouseEnter={() => setfavoriteLogo(<MdOutlineFavorite />)}
          onMouseLeave={() => setfavoriteLogo(<MdFavoriteBorder />)}
        >
          <Link className="header__mainList--mainItem">
            {favoriteLogo} Favorites
          </Link>
        </li>
        <li>
          <Link className="header__mainList--mainItem">
            <MdAddShoppingCart />
            Cart
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
