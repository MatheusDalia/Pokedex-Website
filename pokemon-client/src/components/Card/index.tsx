import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ChipFinal } from 'components/ChipStyle';
import { InfoButton, DeleteButton } from 'components/Button';
import Stack from '@mui/material/Stack';
import theme from '../../styles/theme';
import { Center } from './style';
import { useAxios } from 'utils/useAxios';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { Toast } from 'components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FormInputs } from './style';
import { Input } from 'components';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';

const style = {
  position: 'absolute' as const,
  top: '48%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  // height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export default function MediaCard({ pokemon }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [axiosDel] = useAxios('delete');
  const [message, setMessage] = useState('');

  const onDelete = async () => {
    console.log(pokemon.id);
    await axiosDel({
      url: `/pokemon/${pokemon.id}`
    });
    setMessage('Pokemon deletado. Recarregue a página que ele sumiu');
  };

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.pokemon_number}.png`;
  return (
    <Card sx={{ width: 345 }}>
      <Toast type={'success'} setOpen={setMessage}>
        {message}
      </Toast>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Pokemon info:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormInputs>
              <Input
                onChange={(event) => setName(event.target.value)}
                id="outlined-number"
                label="Nome"
                defaultValue={pokemon.name}
                InputProps={{
                  readOnly: true
                }}
              />

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  onChange={(event) => setType1(event.target.value)}
                  id="outlined-number"
                  label="Type 1"
                  defaultValue={pokemon.type1}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  onChange={(event) => setType2(event.target.value)}
                  id="outlined-number"
                  label="Type 2"
                  defaultValue={pokemon.type2}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="Pokemon N°"
                  defaultValue={pokemon.pokemon_number}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  onChange={(event) => setWeather1(event.target.value)}
                  id="outlined-number"
                  label="Weather 1"
                  defaultValue={pokemon.weather1}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  onChange={(event) => setWeather2(event.target.value)}
                  id="outlined-number"
                  label="Weather 2"
                  defaultValue={pokemon.weather2}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>

              <Input
                id="outlined-number"
                label="Family ID"
                defaultValue={pokemon.family_id}
                InputProps={{
                  readOnly: true
                }}
              />

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  id="outlined-number"
                  label="Image Name"
                  defaultValue={pokemon.img_name}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="Generation"
                  defaultValue={pokemon.generation}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="Evolution Stage"
                  defaultValue={pokemon.evolution_stage}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  id="outlined-number"
                  label="Cross Gen"
                  defaultValue={pokemon.cross_gen}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="Total Stats"
                  defaultValue={pokemon.stat_total}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  id="outlined-number"
                  label="ATK"
                  defaultValue={pokemon.atk}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="DEF"
                  defaultValue={pokemon.def}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="STA"
                  defaultValue={pokemon.sta}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Input
                  id="outlined-number"
                  label="100% CP @ 40"
                  defaultValue={pokemon.full_cp_40}
                  InputProps={{
                    readOnly: true
                  }}
                />
                <Input
                  id="outlined-number"
                  label="100% CP @ 39"
                  defaultValue={pokemon.full_cp_39}
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>
            </FormInputs>
          </Typography>
        </Box>
      </Modal>
      <Center>
        <CardMedia
          component="img"
          height="320"
          width="40"
          image={url}
          alt="pokemon"
        />
        <CardContent>
          <Center>
            <Typography gutterBottom variant="h3" component="div">
              {pokemon.name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
            <Stack
              margin="30px 0 0 0"
              direction="row"
              justifyContent="center"
              spacing={4}
            >
              {pokemon.type1 && <ChipFinal label={pokemon.type1} />}
              {pokemon.type2 && <ChipFinal label={pokemon.type2} />}
            </Stack>
          </Center>
        </CardContent>
        <CardActions display="center">
          <InfoButton onClick={handleOpen}>Info</InfoButton>
          <DeleteButton onClick={onDelete} size="medium">
            Delete
          </DeleteButton>
        </CardActions>
      </Center>
    </Card>
  );
}
