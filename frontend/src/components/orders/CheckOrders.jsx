import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link }  from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '159ch',
    backgroundColor: theme.palette.background.paper,
    
  },
  inline: {
    fontSize: '11px',
    display: 'flex',
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
  },
  listItem: {
    borderRadius: '10px',

    
    
  },
  btnSendMsg: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    fontSize: '13px',
    fontWeight: '550',
    justifyContent: 'space-between',
    marginLeft: '-20px',
    marginBottom: '5px',
    borderRadius: '10px',
    backgroundColor: '#FCB877',
    color: '#fff',
    minWidth: '150px',
    '&:hover': {
      borderBottom: 'none',
      color: '#008968', 
      textDecoloration: 'transparent',
    }  
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
  imageProfile: {
    display: 'flex',
    alignItems: 'left',
    left: '10px',
    justifyContent: 'left',
    marginLeft: '1px',
    marginBottom: '-10px',
    width: '104px',
    height: '104px',
    

  },
  imageOrder: {
    display: 'flex',
    alignItems: 'center',
    right: '1px',
    maxWidth: '70px',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginTop: '-55px',
  },
  listItemText:{
    fontSize:'11px',//Insert your required size
    color: 'black',
    lineHeight: '17px',
  },
  listItemTextTotal:{
    fontSize:'11px',//Insert your required size
    color: 'black',
    fontWeight: 'bold',
  },
  listItemTextIcon:{
    height:'15px',
    color: '#FCB877',
    
  },
  profileName: {
    marginTop: '-60px',
    fontWeight: 'bold',
    marginLeft: '20px',

  },
  profileReputation: {
    marginTop: '10px',
    marginRight: '220px',
    height: '17px',
  },
  txtReputation: {
    color: 'gray',
    fontSize: '12px',
    justifyContent: 'space-around',
    alignItems: 'left',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const profileImage = require("../../media/vbuterin.png");
  const shoeImage = require("../../media/Shoes-PNG-File.png");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    
     
    <List className={classes.root} style={{ backgroundColor: "#EAEAEA"}}>
          
      
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link className={classes.link} to="/orders"  onClick={handleClick}>
          Orders
        </Link>
        <Link className={classes.link} to="/checkorders" onClick={handleClick}>
          Order details
        </Link>
      </Breadcrumbs>
    
    <Grid container spacing={1}
    variant="fullWidth"
    direction="row"
    justifyContent="space-between"
    alignItems="left" style={{marginTop: '4px'}}>
      <Grid item xs={10} md={10} style={{backgroundColor: 'white', borderRadius:'10px', marginBottom:'4px', marginLeft: '10px', height:'67px' }}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemText
        //en primary va nombre del order item}
          primary="Shoe Ricky Sarkany 400mm"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               
              </Typography>
              {" 1 item"}
              <ListItemAvatar>
                  <img alt="{imgjson}" className={classes.imageOrder}  src={shoeImage.default} />
              </ListItemAvatar>
                
            </React.Fragment>
          }
        />
      </ListItem>
      </Grid>
    </Grid>  
      
    <Grid container spacing={0}
    direction="row"  
   justifyContent="left"
  alignItems="center" style={{marginTop: '10px', marginLeft: '7px'}}>  
      <Grid item xs={10} md={5} style={{backgroundColor: 'white', borderRadius:'10px', height: '190px'}} >
        <ListItem className={classes.listItem} alignItems="flex-start">
          <ListItemText
            primary="Transaction Details"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                
                </Typography>
                {" Date"} <FileCopyOutlinedIcon className={classes.listItemTextIcon} /><CallMadeOutlinedIcon className={classes.listItemTextIcon} />
                <ListItem style={{height: '18px'}}> 
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Amount"   />
                </ListItem>
                <Divider style={{backgroundColor: 'black'}}/>
                <ListItem  style={{height: '18px'}} >
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Transaction Fee" />
                </ListItem>
                <Divider style={{backgroundColor: 'black', height:'0.5px'}} />
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Gas price" />
                </ListItem>
                <Divider  style={{backgroundColor: 'black', height:'0.5px'}}/>
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{secondary:classes.listItemText}} secondary="Nonce" />
                </ListItem>
                <Divider style={{backgroundColor: 'black'}}/>
                <ListItem   style={{height: '18px'}}>
                  <ListItemText classes={{primary:classes.listItemTextTotal}} primary="Total" />
                </ListItem>
                
              </React.Fragment>
            }
          />
        </ListItem>
      </Grid>
      <Grid item xs={5} md={5} style={{backgroundColor: 'white', borderRadius:'10px', marginLeft: '7px', height: '190px', justifyContent:'space-around', width:'30vw'}}>
          <ListItem className={classes.listItem} alignItems="flex-start">
            <ListItemText primary="Seller Information"/>
             
          </ListItem>
          <ListItem style={{justifyContent: 'space-around', height: '100px'}}>
            <Grid xs={3} style={{height: '100%', flexBasis: 'auto'}}>
              <ListItemAvatar style={{ margin: 0, width: '100%', height: '100%' }}>
                <img alt="{imgjson}"
                     className={classes.imageProfile}
                     style={{
                      marginTop: 0,
                      width: 'auto',
                      height: '100%',
                      display: 'block'
                    }}
                     src={profileImage.default} />
              </ListItemAvatar>
            </Grid>
            <Grid xs={9} style={{
              height: '100%',
              margin: '0 0.5rem',
              justifyContent: 'center'
            }}>
              <ListItemText className={classes.profileName}
                            style={{
                              marginLeft: 0,
                              marginTop: 0
                            }}
                            primary="Vitalik Buterin"/>
              <ListItemText className={classes.profileReputation}
                            style={{
                              margin: '0 !important'
                            }}
                            primary="Reputation"/>
              <Typography
                    component="span"
                    variant="contained"
                    className={classes.txtReputation}>
                2 sales in the last 90 days
              </Typography> 
              <Button className={classes.btnSendMsg} variant="contained" component={Link} to="/checkorders/messagesbox" primary="MessagesBox"
                      style={{
                        minWidth: 0,
                        width: '150px',
                        margin: '0.5rem 0'
                      }}>
                Send message
              </Button>
            </Grid>                   
          </ListItem>
       </Grid>
    </Grid>  
      
      
      
    
    </List>
  );
}