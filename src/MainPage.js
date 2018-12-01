import React, {Component} from 'react';
import './MainPage.css';
import App from "./App";
import RecipeModal from "./components/RecipeModal"

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {day:"Tue"};

        this.handleClick = this.handleClick.bind(this);
        // this.renderMenu = this.renderMenu.bind(this);
        this.renderMenuForDay = this.renderMenuForDay.bind(this);
    }
    render() {
        return (
            <div>
                <div className="tab">
                    <button className="tablinks" value="Mon" onClick={()=>this.handleClick("Mon")}>Monday</button>
                    <button className="tablinks" onClick={()=>this.handleClick("Tue")}>Tuesday</button>
                    <button className="tablinks" onClick={()=>this.handleClick("Wed")}>Wednesday</button>
                    <button className="tablinks" onClick={()=>this.handleClick("Thu")}>Thursday</button>
                    <button className="tablinks" onClick={()=>this.handleClick("Fri")}>Friday</button>
                </div>
                <div>
                    {this.renderMenuForDay()}
                </div>
            </div>
        )
    }

    renderMenuForDay(){
                return(<div className="Menu">
                    <div className="Food"><RecipeModal day = {this.state.day} idx = {0}/></div>
                    <div className="Food"><RecipeModal day = {this.state.day} idx = {1}/></div>
                    <div className="Food"><RecipeModal day = {this.state.day} idx = {2}/></div>
                    <div className="Food"><RecipeModal day = {this.state.day} idx = {3}/></div>
                </div>)

    }

    handleClick(value){
        this.setState({
            day: value
        });
    }
}

export default MainPage;