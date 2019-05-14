import React from 'react';
import {AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {withStyles} from '@material-ui/core/styles'

const styles = {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };

class Header extends React.Component{
    render(){
        const {classes}= this.props;
        return (<div className={classes.root}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  Movies
                </Typography>
              </Toolbar>
            </AppBar>
          </div>)
    }
}

export default withStyles(styles)(Header);