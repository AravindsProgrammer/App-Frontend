import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const  ArtistServiceCard = ({items})=> {
  return (

    <div>
    {items.map((item, index) => (

    <Card key={index} sx={{ maxWidth: 345, marginTop:5,marginLeft:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://www.gstatic.com/webp/gallery3/1.sm.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {item.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {item.details}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>))}
    </div>
  );
}

export default ArtistServiceCard