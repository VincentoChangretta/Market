import { Link } from 'react-router-dom';
import './Header.scss'
import { useTheme } from 'app/provider/ThemeProvider';

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <header>
      <div className="container">
        <div className="header__inner">
        <Link className='logo' to="/">vcShop</Link>
        <ul className='header__nav'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
        </ul>
        <button onClick={toggleTheme}>Theme</button>
        </div>
      </div>
    </header>
  );
}
