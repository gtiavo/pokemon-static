import { useState, useEffect } from 'react';
import { Layout } from "../../components/layouts";
import { FavoritesPokemon } from '../../components/pokemon';
import {  NoFavorites } from "../../components/ui";
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon( localFavorites.pokemons() );
  }, [])
  

  return (
    <Layout title="Pokemons - Favoritos">

      {
        favoritePokemon.length === 0
        ? ( <NoFavorites /> )
        : ( <FavoritesPokemon Pokemons={ favoritePokemon } />)
      }
      
      

    </Layout>
  )
}

export default FavoritesPage