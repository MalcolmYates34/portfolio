import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IMG_4152 from "../assests/images/IMG_4152.jpg";
import ResumeCard from './ResumeCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 900,
  },
  media: {
    height: 500,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  
 >

  <Grid item xs={3}></Grid>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {IMG_4152}
          title="My Photo"
        />
        <CardContent className="text-center"  >
          <Typography gutterBottom variant="h5" component="h2">
            About Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Born in Washinton DC and rasied in Annapolis, Maryland. Started my career working in the AV field
            and decided to switch to web development. I'm hard working, semi faster learner, and dedicated to getting the 
            job done.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            My Email
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.subTitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            My Resume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <ResumeCard>
            
          </ResumeCard>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>      
  );
}
