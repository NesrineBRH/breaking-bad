import React from 'react';
function Grid(props) {
  return (
    <div className='Card' >
    <h1>{props.name}</h1>
    <h2>{props.birthday}</h2>
    <img alt='photo' src={props.img}/>
     </div>
  );
}

export default Grid;
/* import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Grid(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component={props.img}
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.birthday}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
 */