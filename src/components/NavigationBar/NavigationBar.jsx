import React, {Component} from 'react';
import '../NavigationBar/NavigationBar.css';
import General from '../General/General';
import Deliverable from '../Deliverable/Deliverable'

class NavigationBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            general: true,
            deliverable: false,
            team: false,
            sprint: false,
            price: false,
            documents: false,
            status: false
        }
    }
    handleGeneral(){
        this.setState({general:true, deliverable:false, team:false, sprint:false, price:false, documents:false, status:false})
    }
    handleDeliverable(){
        this.setState({general:false, deliverable:true, team:false, sprint:false, price:false, documents:false, status:false})
    }
    handleTeam(){
        this.setState({general:false, deliverable:false, team:true, sprint:false, price:false, documents:false, status:false})
    }
    handleSprint(){
        this.setState({general:false, deliverable:false, team:false, sprint:true, price:false, documents:false, status:false})
    }
    handlePrice(){
        this.setState({general:false, deliverable:false, team:false, sprint:false, price:true, documents:false, status:false})
    }
    handleDocuments(){
        this.setState({general:false, deliverable:false, team:false, sprint:false, price:false, documents:true, status:false})
    }
    handleStatus(){
        this.setState({general:false, deliverable:false, team:false, sprint:false, price:false, documents:false, status:true})
    }
    render(){
        return(
            <div className='NavigationBar'>
            <div>
                <button className='buttonStyle' style={{background: this.state.general? '#ef5359':'white', color: this.state.general? 'white': 'black'}} onClick={()=> this.handleGeneral()} id='defaultOpen'>General</button>
                <button className='buttonStyle' style={{background: this.state.deliverable? '#ef5359':'white', color: this.state.deliverable? 'white': 'black'}} onClick={()=> this.handleDeliverable()}>Deliverable</button>
                <button className='buttonStyle' style={{background: this.state.team? '#ef5359':'white', color: this.state.team? 'white': 'black'}} onClick={()=> this.handleTeam()}>Team</button>
                <button className='buttonStyle' style={{background: this.state.sprint? '#ef5359':'white', color: this.state.sprint? 'white': 'black'}} onClick={()=> this.handleSprint()}>Sprint</button>
                <button className='buttonStyle' style={{background: this.state.price? '#ef5359':'white', color: this.state.price? 'white': 'black'}} onClick={()=> this.handlePrice()}>Price</button>
                <button className='buttonStyle' style={{background: this.state.documents? '#ef5359':'white', color: this.state.documents? 'white': 'black'}} onClick={()=> this.handleDocuments()}>Documents</button>
                <button className='buttonStyle' style={{background: this.state.status? '#ef5359':'white', color: this.state.status? 'white': 'black'}} onClick={()=> this.handleStatus()}>Status</button>
            </div>

            {this.state.general?
                <General/>
                : null
            }
            {this.state.deliverable?
                <Deliverable/>
                :null
            }
            </div>
        )
    }
}
export default NavigationBar;
