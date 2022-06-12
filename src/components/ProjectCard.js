import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard() {
  return (
    <>

    <Card sx={{ maxWidth: 345 }} mt={2}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvamVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tic Toc Toe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Project Consist of the source code with documentaion and all the details are ecplained in the documentation        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Subscribe</Button>
        <Button size="small">Follow</Button>
      </CardActions>
    </Card>
    
  </>
  );
}
