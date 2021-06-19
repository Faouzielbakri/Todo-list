import React from 'react'
import { Grid, Card, Typography, CardContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import store from '../store';
import * as actions from '../actionstype';


function Task({name,date,settasks,tasks}) {
    
    const deleteit = () => {
        //js
        store.dispatch({
            type:actions.DELETE_TASK,
            payload:{
                name,
                date
            }
        })
    }
    return (
        <Grid  xs={12}  xl={3} justify="space-between" >
                <IconButton onClick={deleteit} style={{position:'relative',left:"40%",padding:0,transform:'translateY(220%)'}} color="secondary" aria-label="add an alarm">
                    <DeleteIcon />
                </IconButton>
                <Card item  style={{ margin: 20,minWidth:"22%" }} >
                    <CardContent >
                    <Typography align="center" variant="h5" component="h2">
                        {name}
                        {/* {console.log(props.task)} */}
                    </Typography>
                    <Typography align="center" color="textSecondary">
                        {date}
                    </Typography>
                    </CardContent>
                </Card>
        </Grid>
    )
}

export default Task
