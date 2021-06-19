import * as actions from "./actionstype";

// const deletes = (state,id) => {
//     // console.log(name)
//     let s = tasks.map((task) => {
//         if (task.name===name) {
//             // console.log("to delete")
//         }
//         else return task
//     })
//     s = s.filter(e=>!!e)
//     console.log(s)

//     // s = s.map((e)=> (e === undefined) && delete e;)
//     settasks(s)
// }

const sortit = (tasks) => {
  if (tasks.length > 0) {
    let s = [...tasks];
    s.sort((a, b) => {
      var x = Date.parse(a.date + "T00:00:00Z"),
        y = Date.parse(b.date + "T00:00:00Z");
      // Compare the 2 dates
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return s;
  }
  return tasks;
};
// const Addtask = (e) => {
//     // console.log("hello")
//     e.preventDefault();
//     settasks(sortit());
// }
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_TASK:
      return [
        ...state,
        { name: action.payload.name, date: action.payload.date },
      ];
    case actions.DELETE_TASK:
      let s = state.filter((task) => {
        return (
          action.payload.name !== task.name && action.payload.date !== task.date
        );
      });
      return s.filter((e) => !!e);
    case actions.SORT_TASKS:
      return action.payload; //sortit(state)
    default:
      return state;
  }
}
