import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { blueGrey, grey, lightBlue } from '@mui/material/colors';

export default function ServiceCard() {
  return (
    <Card  sx={{ maxWidth: 345, marginTop:5,marginLeft:5, backgroundColor:lightBlue }}>
         <Link to={'/about'}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          src="https://www.gstatic.com/webp/gallery3/1.sm.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Makeup Artist
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
