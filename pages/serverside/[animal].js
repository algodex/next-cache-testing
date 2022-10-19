
import AnimalCard from '@/components/AnimalCard'
import axios from 'axios';

export async function getServerSideProps(context) {
  console.log('fetching serverside props ' + context.params.animal)
  const animalQuery = context.params.animal;
  const animalTime = await axios.get(`http://localhost:4005/animal/${animalQuery}`)
  .then(res => {
    console.log('fetched serverside!!')
    return res.data
  }).catch((e) => {console.error(e)})

  return {
    // Passed to the page component as props
    props: { animalTime }
  }
}

const ServerSideAnimal = (props) => {
  return (
    <AnimalCard {...props}></AnimalCard>
  )
}

export default ServerSideAnimal
