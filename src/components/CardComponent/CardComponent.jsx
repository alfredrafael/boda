import React from 'react';
import './CssCardComponent.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




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
  headerFont: {
    fontFamily: 'Dancing Script', 
    textAlign: 'center'
  }
}));


const CardComponent = (props) => {

const classes = useStyles();

return(
    <React.Fragment>
    <CssBaseline/>

    <Card className={classes.card} className='highlight-on-hover'>
    <a href={props.redirectLink} style={{textDecoration: 'none', color: 'inherit'}}>
            <CardMedia
              className={classes.cardMedia}
              image={props.pictureSource}
              title="Image title"
              
            />

            <CardContent className={classes.cardContent}>
              <Typography className={classes.headerFont} gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
              <h2>{props.title}</h2>
              </Typography>
              <Typography style={{textAlign: 'center'}}>
                {props.description}
              </Typography>
            </CardContent>
      </a>
          </Card>
    </React.Fragment>
)}

export default CardComponent