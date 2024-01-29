import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function MediaCard() {
  return (
    <>
    <Card className="card" sx={{ maxWidth: 350, borderRadius: 3, }}>
      <CardMedia
        sx={{ height: 0, }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Salário
        </Typography>
        <Typography className='typography' variant="h5" color="text.secondary">
          R$4.550.00
        </Typography>
      </CardContent>
    </Card>
    <Card className="card2" sx={{ maxWidth: 350, borderRadius: 3, }}>
      <CardMedia
        sx={{ height: 0, }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aluguel
        </Typography>
        <Typography className='typography' variant="h5" color="text.secondary">
          R$450.00
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}
