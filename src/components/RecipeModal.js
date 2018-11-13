import React, { Component } from 'react';
import './App.css';
import './RecipeModal.css';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import $ from  'jquery'

function getModalStyle() {
    const top = 50;
    const left = 50; //top left position
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 100,
      height: theme.spacing.unit * 80,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 3,
    },
});
class RecipeModal extends Component {
    state = {
        open: false,
        data: [],
      };

      componentDidMount() {
        //get Monday's data
        $.get("http://localhost:3003/Monday", function(json){
            this.setState({ data: json });
        }.bind(this));
      }

      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render() {
        const { classes } = this.props;

        if(this.state.data.length===0) {
            return 'Loading...'
        } 

        return(
            <div>
             <img className="icon" src={this.state.data[0].image} alt="Pho"
                  onClick={this.handleOpen}></img>

             <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
             >
             <div style={getModalStyle()} className={classes.paper}>
                <img className="bigImage" src={this.state.data[0].image} alt={this.state.data[0].title}></img>
                <Typography variant="title" id="modal-title" align="center">{this.state.data[0].title}</Typography>
                <Typography variant="subtitle1" id="modal-description">
                    Description: {this.state.data[0].description}
                </Typography>
                <Typography variant="subtitle1" id="modal-likes">
                    Likes: {this.state.data[0].likes}
                </Typography>
                <Button 
                   variant="contained" color="primary" className={classes.button}
                   onClick={this.handleClose}>
                   Close Modal
                </Button>
             </div>
             </Modal>
            </div>
        );
    }
}

RecipeModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(RecipeModal);
