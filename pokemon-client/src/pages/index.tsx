import { CustomText } from '../styles/globalComponents';
import { Input, Toast } from 'components';
import NavBar from 'components/NavBar';
import { Logo, Google, GitHub } from '../assets';
import Card from 'components/Card';
import CardGrid from 'components/CardGrid';
import PaginationButtons from 'components/Pagination';
import { useAxios } from 'utils/useAxios';

import { GodContainer, Container, Content } from './style';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashBoard() {
  const [pokemons, setPokemons] = useState([]);
  const [isWaiting, setIsWating] = useState(false);
  const [axiosGet] = useAxios('get');

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  const [tags, setTags] = useState(false);
  const [search, setSearch] = useState('');
  const [displayPokemons, setDisplay] = useState([]);
  const [finalPokemons, setFinal] = useState([]);

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
    const newPokemons = pokemons.filter((e) => {
      if (!tags) {
        if (e['name'].toLowerCase().includes(value?.toLowerCase())) {
          return e;
        }
      } else {
        if (e['type1']?.toLowerCase().includes(value?.toLowerCase())) return e;
        if (e['type2']?.toLowerCase().includes(value?.toLowerCase())) return e;
        if (e['type3']?.toLowerCase().includes(value?.toLowerCase())) return e;
      }

      return null;
    });
    value.length === 0 ? setDisplay(pokemons) : setDisplay(newPokemons);
  };

  const fetchPokemons = async () => {
    try {
      setIsWating(true);
      const response = await axiosGet({
        url: '/pokemon'
      });
      setPokemons(response.data.data.pokemons);
      setDisplay(response.data.data.pokemons);
      setIsWating(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);
  console.log(displayPokemons);

  // console.log(displayPokemons);
  // const arrayPokemons = Object.values(displayPokemons);
  // const finalArrayPokemons = arrayPokemons[0];
  // console.log(finalArrayPokemons);

  // Get current posts
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = displayPokemons.slice(indexOfFirstCard, indexOfLastCard);
  // console.log(currentCards);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <GodContainer>
      <NavBar search={search} handleSearch={handleSearchChange} />
      <Container>
        <Content>
          <PaginationButtons
            m={4}
            cardsPerPage={cardsPerPage}
            totalCards={displayPokemons.length}
            paginate={paginate}
          />
          <CardGrid pokemons={currentCards} />
        </Content>
      </Container>
    </GodContainer>
  );
}
