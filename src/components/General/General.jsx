import React, { Component } from 'react';
import '../General/General.css';
import {Grid} from '@material-ui/core';

class General extends Component{
    render(){
        return(
            <div className='General'>
                <Grid container spacing ={24}>
                    <Grid item xs={12}>
                        <Grid container spacing ={24}>
                            <Grid item xs={7}>
                                <Grid container spacing={24}>
                                    <Grid item xs={4}>
                                        <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                            Contact number
                                        </Grid>
                                        <Grid item xs={12}>
                                            <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                            Sponsor name
                                        </Grid>
                                        <Grid item xs={12}>
                                            <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Grid container spacing ={24}>
                                    <Grid item xs={12}style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                        Product owner
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid item xs={7}>
                        <Grid container spacing ={24}>
                            <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                Property identification number(site)
                            </Grid>
                            <Grid item={12} style={{width: '100%', marginRight:'30px'}} >
                                <select style={{ width: '100%', height:'40px', paddingRight:'10px'}}>
                                    <option>PIN:12.1 Type Apartment I Size:1860 sft</option>
                                    <option>Others</option>
                                    <option>Others</option>
                                    <option>Others</option>
                                </select>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={5}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}} >
                                Administrative area
                            </Grid>
                            <Grid item xs={12}>
                                <input style={{ width: '85%', height:'30px', paddingRight:'10px'}} placeholder='Dhaka north city corporation/ Dhanmondi'></input>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={24}>
                            <Grid item xs={7}>
                                <Grid container spacing={24}>
                                    <Grid item xs={2}>
                                        <Grid container spacing={24}>
                                            <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                                Hold. number
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing = {24}>
                                                    <input style={{ width: '100%', height:'30px',  marginRight:'10px'}}></input>
                                                </Grid>                                                
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>

                                    <Grid item xs={2}>
                                        <Grid container spacing={24}>
                                            <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                                Flat number
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing = {24}>
                                                    <input style={{ width: '85%', height:'30px',  marginRight:'10px'}}></input>
                                                </Grid>                                                
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Grid container spacing={24}>
                                            <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '0px'}}>
                                                Facing number
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Grid container spacing = {24}>
                                                    <input style={{ width: '100%', height:'30px',  marginRight:'10px'}}></input>
                                                </Grid>                                                
                                            </Grid>
                                        </Grid>                                        
                                    </Grid>

                                </Grid>
                            </Grid>



                            <Grid item xs={5}>
                                <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '20px'}}>
                                    Floor.......
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing ={24}>
                                        <Grid item xs={4}>
                                            <input style={{ width: '85%', height:'30px',  marginRight:'10px'}}></input>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                        Property(site) address                        
                    </Grid>
                    <Grid item xs={12} style={{width: '100%', marginRight:'50px'}}>
                        <input style={{ width: '100%', height:'30px', paddingRight:'10px'}}></input>
                    </Grid>
                    <Grid item xs={12} style={{paddingTop:'10px', paddingBottom: '10px'}}>
                        Real estate company and project                       
                    </Grid>
                    <Grid item xs={12} style={{width: '100%', marginRight:'50px'}}>
                        <input style={{ width: '100%', height:'30px', paddingRight:'10px'}}></input>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
export default General;