import * as React from 'react';
import axios from 'axios';
import AnimalCard from '@/components/AnimalCard';

export async function getStaticPaths() {
  return {
    paths: [
    { params: { animal: 'dog' } },
    { params: { animal: 'cat' } }],
    fallback: true, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  console.log('fetching static props ' + context.params.animal)
  const animalQuery = context.params.animal;
  const animalTime = await axios.get(`http://localhost:4005/animal/${animalQuery}`)
  .then(res => {
    console.log('fetched statically!!')
    return res.data
  }).catch((e) => {console.error(e)})

  return {
    // Passed to the page component as props
    props: { animalTime },
    revalidate: 1,
  }
}

const StaticAnimal = (props) => {
  return (
    <AnimalCard {...props}></AnimalCard>
  )
}

export default StaticAnimal