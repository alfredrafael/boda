import React from 'react';
import Fade from 'react-reveal/Fade';
import HeroSlider from '../HeroSlider';
import CardComponent from '../CardComponent';
import AppFooter from '../AppFooter';
import 'react-awesome-slider/dist/styles.css';

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

const cards = [
  {
    title: 'Our Wedding', 
    id: 1, 
    redirectLink: '/wedding-day',
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg', 
  }, {
    title: 'India Trip', 
    id: 2, 
    redirectLink: '/', 
    pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/2-scaled.jpeg',
  },
];

const cards2 = [ {title: 'Third', id: 3, pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg'}, {title: 'Cuatro', id: 1, pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg',}, {title: 'Cinco', id: 2, pictureSource: 'https://alfredorafael.com/wp-content/uploads/2020/06/1-scaled.jpeg'},];


const Home = () => {

  const classes = useStyles();

  const renderCard = cards.map((card, index) => {
    return <Grid item key={card.index} xs={12} sm={6} md={6}>
             <CardComponent title={card.title} redirectLink={card.redirectLink} pictureSource={card.pictureSource}/>
          </Grid> 
  });

  const renderCard2 = cards2.map((card, index) => {
    return <Grid item key={card.index} xs={12} sm={6} md={4} style={{justifyContent: 'space-around'}}>
             <CardComponent title={card.title} redirectLink={card.redirectLink} pictureSource={card.pictureSource}/>
          </Grid> 
  });

  return(
    <React.Fragment>
    <HeroSlider/>
    <Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
      {renderCard}
    </Grid>
    </Container>
    <Container>
    <Grid container spacing={3} style={{marginBottom: '3%'}}>
    {renderCard2}
    </Grid>
    </Container>
  <AppFooter/>

  </React.Fragment>
)};


export default Home;