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
        id: Math.floor((Math.random()*10)+1)
      };

      componentDidMount() {
        //get json data
        $.get("http://localhost:3003/dish", function(json){
            this.setState({ data: json });
        }.bind(this));
      }

      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      addLike = () => {
        //update like
        var temp = this.state.data
        temp[this.state.id].likes++
        this.setState({ data: temp })

        $.ajax({
            url:'http://localhost:3003/dish/'+this.state.id,
            dataType:'json',
            type:'put',
            data:{
                "id": this.state.id,
                "title": temp[this.state.id].title,
                "image": temp[this.state.id].image,
                "description": temp[this.state.id].description,
                "likes": temp[this.state.id].likes
            },
            success:(data)=>{
                console.log(data);
            },
            error:(err)=>{
                console.log(err);
            }
        })
      };

    render() {
        const { classes } = this.props;

        if(this.state.data.length===0) {
            return 'Loading...'
        } 
        console.log(this.state.id)
        return(
            <div>
             <img className="icon" src={this.state.data[this.state.id].image} alt={this.state.data[this.state.id].title}
                  onClick={this.handleOpen}></img>

             <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
             >
             <div style={getModalStyle()} className={classes.paper}>
                <img className="bigImage" src={this.state.data[this.state.id].image} alt={this.state.data[this.state.id].title}></img>
                <Typography variant="title" id="modal-title" align="center">{this.state.data[this.state.id].title}</Typography>
                <Typography variant="subtitle1" id="modal-description">
                    Description: {this.state.data[this.state.id].description}
                </Typography>
                <div class='ui right labeled button' role='button' tabindex='0'>
                   <button class='ui red button' role='button' onClick={this.addLike}>
                     <i aria-hidden='true' class='heart icon' />
                     Like
                   </button>
                   <a class='ui red left pointing basic label'>{this.state.data[this.state.id].likes}</a>
                </div>
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
