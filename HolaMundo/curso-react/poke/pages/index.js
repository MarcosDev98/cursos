import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url.split('/').filter(x => x).pop();
  return (
    <li><Link href={`pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}


const Pokemones = ({ pokemones }) => {
  return (
    <div>
      <p data-testid="titulo" >Mi App de Pokemones</p>
      <ul>
        {pokemones.map((poke) => <Pokemon pokemon={poke} key={poke.name} />)}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  
  return {
    props: { pokemones: data.results }
  }

}

export default Pokemones;