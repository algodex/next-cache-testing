import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

const CachingTest = ({animalTime: animalTimeProps}) => {
  const router = useRouter()
  const { animal: animalQuery } = router.query
  const [animalTime, setAnimalTime] = useState(animalTimeProps)

  console.log({animalTimeProps})
  const fetchAnimal = async(animal) => {
    if (!animal) {
      return;
    }
    axios.get(`/time/${animal}`)
    .then(res => {
      setAnimalTime(res.data)
    }).catch((e) => {console.error(e)})
  };

  useEffect(() => {
    console.log('fetching: ' + animalQuery)
    fetchAnimal(animalQuery)
  }, [animalQuery]);

  // const aggAnimalTime = animalTime ? animalTime : animalTimeProps

  const animalTimeJsx = animalTime ? (
    <div>
      <div>
        {animalTime.animal}
      </div>
      <div>
        {animalTime.time}
      </div>
    </div>
  ) : (
    <CircularProgress color="inherit" />
  )

  return (
    <>
      <div style={{minHeight: 100, minWidth:'100%', display:'block'}}></div>
      <Card sx={{ minWidth: 275, width: 300, margin: 'auto'}}>
        <CardContent>
          <Typography sx={{ fontSize: 36 }} color="text.primary" gutterBottom>
            {animalQuery}
          </Typography>
          {animalTimeJsx}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {
            setAnimalTime(null)
            fetchAnimal(animalQuery)
          }}>Refresh</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CachingTest