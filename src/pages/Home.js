import React from 'react';
import './Home.css';
import Task from '../components/Task';
import { Grid, Button} from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import {useState} from 'react';
import Addtask from './../components/Addtask';
import store from '../store';
import * as actions from '../actionstype';


function Home() {
    const [current, setcurrent] = useState({
        name:"",
        date:""
    })
    const [tasks, settasks] = useState(store.getState());
    const sortit = (tasks) => {
        let s = [...tasks]
        s.sort((a, b) => {
            var x =  Date.parse(a.date+"T00:00:00Z"),y =  Date.parse(b.date+"T00:00:00Z");
            // Compare the 2 dates
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          });
        return s 
    }
    store.subscribe(()=>{
        // store.dispatch({
        //     type:actions.SORT_TASKS
        // })
        settasks(store.getState)
        
    })
    const showhide = () =>{
        const x = document.getElementsByClassName('addtassk')[0]
        console.log(tasks)
        if (x.style.display ==='none'){
            x.style.display ='block'
        }else{
            x.style.display ='none'
        }
        
        }
    
    return (
        <Grid container align="center"  > 
            <Grid item xl={12} xs={12}> 
                <Button onClick={showhide} ><AddCircleRoundedIcon style={{fontSize:50}}  color="primary"/></Button>
            </Grid >
            <Grid item xl={12} xs={12} >
                <Addtask current={current} setcurrent={setcurrent} settasks={settasks} tasks={tasks}/>
            </Grid>
            {tasks !== undefined ? (tasks.map((task) => 
              (<Task name={task.name} date={task.date} settasks={settasks} tasks={tasks}/>)
             ) ) : console.log("undefined")
            }
        </Grid>
    )
}

export default Home
