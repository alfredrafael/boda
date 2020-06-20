import React from 'react';
import Fade from 'react-reveal/Fade';
import HeroSlider from '../HeroSlider';
import CardComponent from '../CardComponent';
import AppFooter from '../AppFooter';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards3 = [ 
  {
    title: 'Wedding', 
    id: 1, 
    redirectLink: '/wedding-day', 
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/13-scaled.jpeg',
    description: 'Celebrating 30 Suzy and Jose 30 years today!'

  }, {
    title: 'India', 
    id: 2,
    redirectLink: '/india', 
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/india_jv1-1-scaled.jpg',
    description: 'Trip to India in [year goes here]'

  }, 
  {
    title: 'Chile', 
    id: 3, 
    redirectLink: '/chile',
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/Suzy-Jose-Chile.png',
    description: 'Trip to Chile in February 2017'

  },
];

const cards2 = [
  {
    title: 'Mexico', 
    id: 1, 
    redirectLink: '/mexico',
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_4169-2-scaled.jpeg',
    description: 'Trip to Mexico in 2018'
  }, 
  
  {
    title: 'Aruba', 
    id: 2, 
    redirectLink: '/aruba', 
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/IMG_7964-scaled.jpeg',
    description: 'Trip to Aruba in 2019'
  },
];


const Home = () => {

  const classes = useStyles();

  const renderCard3 = cards3.map((card, index) => {
    return <Grid item key={card.index} xs={12} sm={6} md={4}>
             <CardComponent 
              title={card.title} 
              redirectLink={card.redirectLink} 
              pictureSource={card.pictureSource}
              description={card.description}
              />
          </Grid> 
  });

  const renderCard2 = cards2.map((card, index) => {
    return <Grid item key={card.index} xs={12} sm={6} md={6} style={{justifyContent: 'space-around'}}>
             <br/>
             <CardComponent 
              title={card.title} 
              redirectLink={card.redirectLink} 
              pictureSource={card.pictureSource}
              description={card.description}
              />
            </Grid> 
  });

  return(
    <React.Fragment>
    <HeroSlider/>
   <div style={{background: 'linear-gradient(white, lightCyan)'}}>
    <Container className={classes.cardGrid} style={{textAlign: 'center', margin:'-3% inherit -3% inherit',}}>
     <img src='https://alfredorafael.com/wp-content/uploads/2020/06/divider1.png' style={{maxWidth: '70%'}}/>
     <h1 style={{fontFamily: 'Dancing Script, cursive', textAlign: 'center'}}>Galleries</h1>
    </Container>
    
    <Container>
    
    <Grid container spacing={4}>
    {renderCard3}
    </Grid>

     <Grid container spacing={4} style={{marginBottom: '3%'}}>
    {renderCard2}
    </Grid>


    </Container>
    </div>
  <AppFooter/>

  </React.Fragment>
)};


export default Home;