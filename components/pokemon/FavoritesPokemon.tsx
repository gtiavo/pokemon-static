import { FC } from 'react';
import {  Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './';

interface Props {
    Pokemons: number[];
}


export const FavoritesPokemon: FC <Props> = ({Pokemons}) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start' >
            {
              Pokemons.map( id => (
               <FavoriteCardPokemon key={id} pokemonId={id} />
              ))
            }

          </Grid.Container>
  )
}
