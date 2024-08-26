import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Todoitems({ val, i, deleteTodo }) {
    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h6">Task: {val.name}</Typography>
                <Typography>Status: {val.status}</Typography>
                <Typography>Description: {val.description}</Typography>
                <Button variant="contained" color="error" onClick={() => deleteTodo(i)} sx={{ marginRight: 2 }}>
                    Delete
                </Button>
                <Button component={Link} to={`${val._id}`} variant="outlined" color="primary">
                    Edit
                </Button>
            </CardContent>
        </Card>
    );
}

export default Todoitems;
