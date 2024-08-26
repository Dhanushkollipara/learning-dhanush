import Todoitems from "./Todoitems";
import { Grid } from "@mui/material";

function Todolist({ todos, deleteTodo }) {
    return (
        <Grid container spacing={2}>
            {todos.map((val, i) => (
                <Grid item xs={12} key={val._id}>
                    <Todoitems val={val} i={val._id} deleteTodo={deleteTodo} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Todolist;
