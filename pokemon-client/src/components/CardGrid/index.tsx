import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../Card';

import { useState, useEffect } from 'react';

export default function NestedGrid({ pokemons }) {
  const [renderPokemons, setPokemons] = useState([]);
  useEffect(() => {
    setPokemons(pokemons);
  }, [pokemons]);

  return (
    <div style={{ width: '100%' }}>
      <Box
        margin="40px 0 0 0"
        marginBottom="40px"
        sx={{
          display: 'grid',
          columnGap: 4,
          rowGap: 3,
          gridTemplateColumns: 'repeat(3, 1fr)'
        }}
      >
        {renderPokemons.map((e) => (
          <Card key={e.pokemon_number} pokemon={e} />
        ))}
      </Box>
    </div>
  );
}
