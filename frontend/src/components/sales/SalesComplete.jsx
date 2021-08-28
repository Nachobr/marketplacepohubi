import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link }  from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    padding: '20px',
  },
  inline: {
    
    display: 'flex',
  },
  
  listItem: {
    borderRadius: '20px',
    height:'117px',
    backgroundColor: 'white',

  },
  listItemText:{
       
    marginLeft: '20px',
  },
  btnDetails: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '140px',
    maxWidth: '140px',  
    top: '-4rem', 
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent', 
    }  
  },
  btnEdit: {
    display: 'flex',
    right: '1px',
    top: '-4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    borderRadius: '10px',
    minWidth: '140px',
    maxWidth: '140px',
    backgroundColor: '#fef1e4',
    color: '#FCB877',
    '&:hover': {
      borderBottom: 'none',
      color: '#008968',
      backgroundColor: 'transparent', 
   }, 
  },
  link: {
    display: 'flex',
    fontSize: '14px',
    color: '#000000',
    textDecorationColor: 'transparent',
    marginLeft: '0.1rem',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    '&:hover': {
        borderBottom: 'none',
        color: '#008968',
        textDecorationColor: 'transparent', 
      }
},
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '10px',

  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const completeImage = require("../../media/canoneos.jpg");
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
          <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link}  onClick={handleClick}>
          Sales
        </Link>
        <Link
            className={classes.link}
            to="/salescomplete"
            onClick={handleClick}
            aria-current="page"
        >
        Complete
        </Link>
      
      </Breadcrumbs>
    
    
    <Grid container spacing={1}
          variant="fullWidth"
          direction="column"
          justifyContent="space-around"
          alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px', height:'117px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={completeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Canon EOS Rebel T7 EF-S 18-55mm
              </Typography>
              {" 1 item"}
              
                <Button className={classes.btnDetails} variant="contained" component={Link} to="/salescompletedetails" primary="Preview" >
                Details
                </Button>
                
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px', marginBottom:'8px'}}>
      <ListItem alignItems="flex-start" className={classes.listItem}>
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={completeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Canon EOS Rebel T7 EF-S 18-55mm
              </Typography>
              {" 1 item"}
              
                <Button className={classes.btnDetails} variant="contained" component={Link} to="/salescompletedetails" primary="Preview" >
                Details
                </Button>
                
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
      
      <Grid item xs={12} md={12} style={{backgroundColor: 'white', borderRadius:'20px'}}>
      <ListItem className={classes.listItem} alignItems="flex-start">
      <ListItemAvatar>
          <img alt="{imgjson}" className={classes.image} src={completeImage.default} />
           
        </ListItemAvatar>
        <ListItemText
          className={classes.listItemText}
          primary="Delivered on 11th of august"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Canon EOS Rebel T7 EF-S 18-55mm
              </Typography>
              {" 1 item"}
              
                <Button className={classes.btnDetails} variant="contained" component={Link} to="/salescompletedetails" primary="Preview" >
                Details
                </Button>
                
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
    </Grid>  
    </List>
  );
}