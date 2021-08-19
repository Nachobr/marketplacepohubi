import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '159ch',
      backgroundColor: theme.palette.background.paper,
      
    },
    inline: {
      
      display: 'flex',
    },
    title: {
        fontSize: "15px",
        
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
  
    btnOrder: {
      display: 'flex',
      right: '1px',
      justifyContent: 'space-between',
      marginLeft: 'auto'
    },
  }));
  
  export default function AlignItemsList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
  };
    return (
      
       
      <List className={classes.root}>
            
      
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" to="/sales" onClick={handleClick}>
          Sales
        </Link>
        <Typography color="textPrimary">Active</Typography>
      </Breadcrumbs>
      <Divider variant="fullWidth" component="li" />
     
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="../../media/Shoes-PNG-File.png" />
            {/* <img src="../../media/Shoes-PNG-File.png" /> */}
          </ListItemAvatar>
          <ListItemText
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
                
                  <Button className={classes.btnOrder} variant="outlined" color="primary">
                  Primary
                  </Button>
                  <Button className={classes.btnOrder} variant="outlined" color="secondary">
                  Secondary
                  </Button>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
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
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
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
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    );
  }