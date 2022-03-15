import { CustomText } from '../../styles/globalComponents';
import { RedButton, Input, Toast } from 'components';
import { Pokedex } from '../../assets';
import FormLabel from '@mui/material/FormLabel';
import NavBarForm from 'components/NavBarForm';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Checkbox } from '@mui/material';
import theme from '../../styles/theme';

import { GodContainer, Container, Content, FormInputs } from './style';
import Image from 'next/image';

import { useSession, signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAxios } from 'utils/useAxios';
import crypto from 'crypto';

export default function Login() {
  const { data: session, status } = useSession();
  const [name, setName] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('""');
  const [weather1, setWeather1] = useState('');
  const [weather2, setWeather2] = useState('""');
  const [pokemon_number, setPokemonNumber] = useState(0);
  const [img_name, setImgName] = useState('');
  const [family_id, setFamilyId] = useState('');
  const [cross_gen, setCrossGen] = useState('');
  const [stat_total, setStatTotal] = useState('');
  const [nest, setNest] = useState('0');
  const [atk, setAtk] = useState('');
  const [def, setDef] = useState('');
  const [sta, setSta] = useState('');
  const [full_cp_39, setCp39] = useState('');
  const [generation, setGeneration] = useState('');
  const [full_cp_40, setCp40] = useState('');
  const [evolution_stage, setEvolutionStage] = useState('');
  const [legendary, setLegendary] = useState('0');
  const [acquirable, setAcquirable] = useState('0');
  const [spawns, setSpawns] = useState('0');
  const [regional, setRegional] = useState('0');
  const [raidable, setRaidable] = useState('0');
  const [hatchable, setHatchable] = useState('0');
  const [shiny, setShiny] = useState('0');

  const [news, setNew] = useState('0');
  const [not_gettable, setNotGet] = useState('0');
  const [future_evolve, setFutureEvolve] = useState('0');
  const [evolved, setEvolved] = useState('0');

  const [checkedTerm, setCheckedTerm] = useState(false);
  const [checkedTerm2, setCheckedTerm2] = useState(false);
  const [checkedTerm3, setCheckedTerm3] = useState(false);
  const [checkedTerm4, setCheckedTerm4] = useState(false);
  const [checkedTerm5, setCheckedTerm5] = useState(false);
  const [checkedTerm6, setCheckedTerm6] = useState(false);
  const [checkedTerm7, setCheckedTerm7] = useState(false);
  const [checkedTerm8, setCheckedTerm8] = useState(false);
  const [checkedTerm9, setCheckedTerm9] = useState(false);
  const [checkedTerm10, setCheckedTerm10] = useState(false);
  const [checkedTerm11, setCheckedTerm11] = useState(false);
  const [checkedTerm12, setCheckedTerm12] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [axiosPost] = useAxios('post');
  const successMessage = 'Pokemon cadastrado com sucesso';

  const termChange = (event) => {
    setCheckedTerm(event.target.checked);
    if (checkedTerm === true) {
      setLegendary('0');
    } else {
      setLegendary('1');
    }
  };

  const termChange2 = (event) => {
    setCheckedTerm2(event.target.checked);
    if (checkedTerm2 === true) {
      setAcquirable('0');
    } else {
      setAcquirable('1');
    }
  };

  const termChange3 = (event) => {
    setCheckedTerm3(event.target.checked);
    if (checkedTerm3 === true) {
      setSpawns('0');
    } else {
      setSpawns('1');
    }
  };

  const termChange4 = (event) => {
    setCheckedTerm4(event.target.checked);
    if (checkedTerm4 === true) {
      setRegional('0');
    } else {
      setRegional('1');
    }
  };

  const termChange5 = (event) => {
    setCheckedTerm5(event.target.checked);
    if (checkedTerm5 === true) {
      setRaidable('0');
    } else {
      setRaidable('1');
    }
  };

  const termChange6 = (event) => {
    setCheckedTerm6(event.target.checked);
    if (checkedTerm6 === true) {
      setHatchable('0');
    } else {
      setHatchable('1');
    }
  };

  const termChange7 = (event) => {
    setCheckedTerm7(event.target.checked);
    if (checkedTerm7 === true) {
      setShiny('0');
    } else {
      setShiny('1');
    }
  };

  const termChange8 = (event) => {
    setCheckedTerm8(event.target.checked);
    if (checkedTerm8 === true) {
      setNest('0');
    } else {
      setNest('1');
    }
  };

  const termChange9 = (event) => {
    setCheckedTerm9(event.target.checked);
    if (checkedTerm9 === true) {
      setNew('0');
    } else {
      setNew('1');
    }
  };

  const termChange10 = (event) => {
    setCheckedTerm10(event.target.checked);
    if (checkedTerm10 === true) {
      setNotGet('0');
    } else {
      setNotGet('1');
    }
  };

  const termChange11 = (event) => {
    setCheckedTerm11(event.target.checked);
    if (checkedTerm11 === true) {
      setFutureEvolve('0');
    } else {
      setFutureEvolve('1');
    }
  };

  const termChange12 = (event) => {
    setCheckedTerm12(event.target.checked);
    if (checkedTerm12 === true) {
      setEvolved('0');
    } else {
      setEvolved('1');
    }
  };

  const loginClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  const sendPokemon = async () => {
    await axiosPost({
      url: '/pokemon',
      body: {
        name,
        pokemon_number,
        img_name,
        generation,
        evolution_stage,
        evolved,
        family_id,
        cross_gen,
        type1,
        type2,
        weather1,
        weather2,
        stat_total,
        atk,
        def,
        sta,
        legendary,
        acquirable,
        spawns,
        regional,
        raidable,
        hatchable,
        shiny,
        nest,
        news,
        not_gettable,
        future_evolve,
        full_cp_40,
        full_cp_39
      },
      success: (res: AxiosResponse) => {
        setMessage(successMessage);
        console.log(res);
      },
      error: (err: AxiosError) => {
        setMessage('Deu erro, campeão');
        console.log(err);
      }
    });
  };

  return (
    <GodContainer>
      <NavBarForm />
      <Container>
        <Content>
          <Toast
            type={message === successMessage ? 'success' : 'error'}
            setOpen={setMessage}
          >
            {message}
          </Toast>
          <Image src={Pokedex}></Image>
          <CustomText black regular size="32px" margin="30px 0 0 0">
            Crie um Pokemon
          </CustomText>

          <CustomText black regular margin="35px 0 0 0 ">
            Insira um novo pokemon na pokedex
          </CustomText>

          <FormInputs>
            <Input
              onChange={(event) => setName(event.target.value)}
              required
              id="outlined-number"
              label="Nome"
              placeholder="EX: Pikachu..."
              InputLabelProps={{
                shrink: true
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
                required
                id="outlined-number"
                label="Type 1"
                placeholder="EX: Eletric..."
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                onChange={(event) => setType2(event.target.value)}
                id="outlined-number"
                label="Type 2"
                placeholder="EX: Grass..."
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                onChange={(event) => setPokemonNumber(event.target.value)}
                required
                id="outlined-number"
                label="Pokemon N°"
                placeholder="EX: 861..."
                InputLabelProps={{
                  shrink: true
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
                required
                onChange={(event) => setWeather1(event.target.value)}
                id="outlined-number"
                label="Weather 1"
                placeholder="EX: Rainy..."
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                onChange={(event) => setWeather2(event.target.value)}
                id="outlined-number"
                label="Weather 2"
                placeholder="EX: Cloudy..."
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Stack>

            <Input
              onChange={(event) => setFamilyId(event.target.value)}
              required
              id="outlined-number"
              label="Family ID"
              type="number"
              InputLabelProps={{
                shrink: true
              }}
            />

            <Box sx={{ display: 'flex' }}>
              <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm}
                        onChange={termChange}
                        name="legendary"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Legendary
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm2}
                        onChange={termChange2}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Acquirable
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm3}
                        onChange={termChange3}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Spawns
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm4}
                        onChange={termChange4}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Regional
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm5}
                        onChange={termChange5}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Raidable
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm6}
                        onChange={termChange6}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Hatchable
                      </Box>
                    }
                  />
                </FormGroup>
              </FormControl>
              <FormControl
                required
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm7}
                        onChange={termChange7}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Shiny
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm8}
                        onChange={termChange8}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Nest
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm9}
                        onChange={termChange9}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        New
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm10}
                        onChange={termChange10}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Not Gettable
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm11}
                        onChange={termChange11}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Future Evolve
                      </Box>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTerm12}
                        onChange={termChange12}
                        name="gilad"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                      />
                    }
                    label={
                      <Box component="div" fontSize={14}>
                        Evolved
                      </Box>
                    }
                  />
                </FormGroup>
              </FormControl>
            </Box>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Input
                required
                onChange={(event) => setImgName(event.target.value)}
                id="outlined-number"
                label="Image Name"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setGeneration(event.target.value)}
                id="outlined-number"
                label="Generation"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setEvolutionStage(event.target.value)}
                id="outlined-number"
                label="Evolution Stage"
                type="number"
                InputLabelProps={{
                  shrink: true
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
                required
                onChange={(event) => setCrossGen(event.target.value)}
                id="outlined-number"
                label="Cross Gen"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setStatTotal(event.target.value)}
                id="outlined-number"
                label="Total Stats"
                type="number"
                InputLabelProps={{
                  shrink: true
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
                required
                onChange={(event) => setAtk(event.target.value)}
                id="outlined-number"
                label="ATK"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setDef(event.target.value)}
                id="outlined-number"
                label="DEF"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setSta(event.target.value)}
                id="outlined-number"
                label="STA"
                type="number"
                InputLabelProps={{
                  shrink: true
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
                required
                onChange={(event) => setCp40(event.target.value)}
                id="outlined-number"
                label="100% CP @ 40"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <Input
                required
                onChange={(event) => setCp39(event.target.value)}
                id="outlined-number"
                label="100% CP @ 39"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Stack>
          </FormInputs>

          <RedButton
            style={{ marginTop: '50px', marginBottom: '40px' }}
            onClick={sendPokemon}
          >
            Criar Pokemão
          </RedButton>
        </Content>
      </Container>
    </GodContainer>
  );
}
