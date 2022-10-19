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


const CachingTest = () => {
  const router = useRouter()
  const { animal } = router.query
  const [animalTime, setAnimalTime] = useState(null)

  const fetchAnimal = async(animal) => {
    setAnimalTime(null)
    if (!animal) {
      return;
    }
    axios.get(`/time/${animal}`)
    .then(res => {
      setAnimalTime(res.data)
    }).catch((e) => {console.error(e)})
  };

  useEffect(() => {
    console.log('fetching: ' + animal)
    fetchAnimal(animal)
  }, [animal]);
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
            {animal}
          </Typography>
          {animalTimeJsx}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => fetchAnimal(animal)}>Refresh</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CachingTest