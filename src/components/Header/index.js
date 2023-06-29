// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-con">
    <img
      className="website-logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div>
      <ul className="buttons-con">
        <li className="nav-menu-item">Home</li>
        <li className="nav-menu-item">Products</li>
        <li className="nav-menu-item">Cart</li>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
