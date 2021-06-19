import React from 'react'
import { Button, Grid, TextField, Typography, Card } from '@material-ui/core';
import store from '../store';
import * as actions from '../actionstype';



function Addtask({current,setcurrent}) {
    
    const handlesubmit = (e) =>{
            e.preventDefault() ;
            // console.log(store.getState());
            store.dispatch({
                type : actions.ADD_TASK,
                payload:{
                    name :current.name,
                    date:current.date
                }
            })
    }
    return (
        <Grid className="addtassk" xl={3} xs={12}>
                <Card style={{boxShadow: '1px 0px 10px '}}>
                    <Typography align="center"  variant="h5" component="form"  style={{display:"flex",flexDirection:"column",padding:10}}>
                        
                        <TextField 
                            id="name" 
                            label="Task name"
                            type="text"
                            value={current.name}
                            onChange={e => setcurrent({...current,name:e.target.value})} 
                            style={{margin:10,marginTop:0,maxWidth:'90%'}}/>
                        <TextField
                            id="date"
                            label="date"
                            type="date"
                            value={current.date}
                            onChange={e => setcurrent({...current,date:e.target.value})}
                            InputLabelProps={{  
                            shrink: true,
                            }}
                            style={{margin:10}}
                        />
                        <Button type="submit" 
                        onClick={handlesubmit} 
                        variant="contained" color="primary" style={{margin:10}}>Add</Button>
                    </Typography>  
                </Card>
        </Grid>
    )
}

export default Addtask
