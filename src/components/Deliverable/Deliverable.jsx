import React, {Component} from 'react';
import '../Deliverable/Deliverable.css';
import {Grid} from '@material-ui/core';

class Deliverable extends Component{
    render(){
        return(
            <div className='Deliverable'>
                <Grid container spacing = {24}>
                    <Grid item xs ={12}>
                        <Grid container spacing ={24}>
                          <Grid item xs={4}>
                              <Grid container spacing ={24}>
                                <Grid item xs={12}>
                                    Project state
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing = {24}>
                                        <input style={{ width: '85%', height:'30px', paddingRight:'10px'}} placeholder='Pre-sale'></input>
                                    </Grid>
                                </Grid>
                              </Grid>
                          </Grid>  

                          <Grid item xs={4}>
                              <Grid container spacing ={24}>
                                <Grid item xs={12}>
                                    Reason
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing = {24}>
                                        <input style={{ width: '85%', height:'30px', paddingRight:'10px'}} placeholder='Reason'></input>
                                    </Grid>
                                </Grid>
                              </Grid>
                          </Grid>  

                          <Grid item xs={4}>
                              <Grid container spacing ={24}>
                                <Grid item xs={12}>
                                    Project manager
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing = {24}>
                                        <input style={{ width: '100%', height:'30px', paddingRight:'10px', marginRight:'20px'}} placeholder='Project manager'></input>
                                    </Grid>
                                </Grid>
                              </Grid>
                          </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing ={24}>
                            <Grid item xs={2}>
                                <Grid container spacing = {24}>
                                    <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Project Code
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container spacing = {24}>
                                            <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={4}>
                                <Grid container spacing = {24}>
                                    <Grid item xs={12}style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Name
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container spacing = {24}>
                                            <input style={{ width: '85%', height:'30px', paddingRight:'10px'}}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}>
                                <Grid container spacing = {24}>
                                    <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Start date
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container spacing = {24}>
                                            <input style={{ width: '85%', height:'30px', }}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}>
                                <Grid container spacing = {24}>
                                    <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        End date
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container spacing = {24}>
                                            <input style={{ width: '85%', height:'30px'}}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}>
                                <Grid container spacing = {24}>
                                    <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Duration
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Grid container spacing = {24}>
                                            <input style={{ width: '80%', height:'30px'}}></input>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing ={24}>
                            <Grid item xs={12}>
                                <Grid container spacing ={24}>
                                    <Grid item xs = {3} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Billing Address
                                    </Grid>
                                    <Grid item xs= {1} style={{paddingTop:'20px', paddingBottom: '0px', textAlign:'right'}}>
                                        <input style={{paddingTop:'20px', paddingBottom: '0px'}} type='checkbox' /*style={{ width: '85%', height:'30px', paddingRight:'10px'}}*/></input>
                                    </Grid>
                                    <Grid item xs= {8} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                        Billing address same as the property address
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing ={24}>
                                    <input style={{ width: '100%', height:'30px', paddingRight:'10px', marginRight:'20px'}}></input>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing ={24}>
                            <Grid item xs={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                                <Grid container spacing ={24}>
                                    Administrative area
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing ={24}>
                                    <input style={{ width: '100%', height:'30px', paddingRight:'10px',marginRight:'20px'}}></input>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs ={12} style={{paddingTop:'20px', paddingBottom: '0px'}}>
                        <Grid container spacing = {24}>
                            <button className='submit-button'>Submit</button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Deliverable;