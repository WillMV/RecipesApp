import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ProfileIcon from '../images/profileIcon.svg';
import SearchBar from './SearchBar';
import appLogo from '../images/appLogo.svg';
import recipesApp from '../images/recipesApp.svg';
import SearchIcon from '../images/searchIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/Header.css';

function Header({ titlePage }) {
  const [search, setSearch] = useState(false);

  const titleNoSearch = ['Favorite Recipes', 'Profile', 'Done Recipes'];
  const verification = titleNoSearch.some((title) => title === titlePage);
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">

          <img alt="appLogoImg" src={ appLogo } />
          <img alt="RecipesApp" src={ recipesApp } />

          <Link className="navbar-brand" to="/profile">
            <img
              src={ ProfileIcon }
              alt="icon-profile"
              data-testid="profile-top-btn"
            />
          </Link>

          <Button
            type="button"
            onClick={ () => { setSearch(!search); } }
          >
            <img
              src={ SearchIcon }
              alt="icon-search"
              data-testid="search-top-btn"
            />
          </Button>
        </div>
      </nav>

      <img src={ mealIcon } alt="mealIcon" />
      <h1
        data-testid="page-title"
        className="navbar-brand mb-0 h1 "
      >
        {titlePage}
      </h1>
      {!verification && (
        <div>
          <SearchBar search={ search } />
        </div>
      )}
    </div>

  );
}

Header.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  titlePage: state.title.title,
});

export default connect(mapStateToProps)(Header);
