/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import CardDetailsMeals from '../components/CardDetailsMeals';
import CardDatailsDrinks from '../components/CardDatailsDrinks';

function RecipeDetails({ match: { params: { id } }, location: { pathname } }) {
  const { makeFetch } = useFetch();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const API = pathname === `/meals/${id}` ? 'themealdb' : 'thecocktaildb';
    const KEY = pathname === `/meals/${id}` ? 'meals' : 'drinks';
    const url = `https://www.${API}.com/api/json/v1/1/lookup.php?i=${id}`;
    const getDetails = async () => {
      const result = await makeFetch(url);
      setDetails(result[KEY][0]);
    };
    getDetails();
    console.log(details);
  }, []);
  return (
    <div>
      {pathname === `/meals/${id}` ? (
        <CardDetailsMeals details={ details } />)
        : <CardDatailsDrinks details={ details } />}
    </div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;
