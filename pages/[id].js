import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <>
      <div style={{minHeight: 100, minWidth:'100%', display:'block'}}></div>
      <Card sx={{ minWidth: 275, width: 300, margin: 'auto'}}>
        <CardContent>
          <Typography sx={{ fontSize: 36 }} color="text.primary" gutterBottom>
            Dog
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
