import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

function Todoforms({ todoChanged, descChanged, todoEntered, setStatusEntered, descEntered, addTodo, clearAll }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                label="Todo Item"
                variant="outlined"
                value={todoEntered}
                onChange={todoChanged}
            />
            <TextField
                label="Description"
                variant="outlined"
                value={descEntered}
                onChange={descChanged}
            />
            <TextField
                select
                label="Status"
                onChange={(e) => setStatusEntered(e.target.value)}
                variant="outlined"
                sx={{ width: '25ch' }}
            >
                <MenuItem value="complete">Completed</MenuItem>
                <MenuItem value="incomplete">Incomplete</MenuItem>
            </TextField>
            <Button variant="contained" onClick={addTodo} sx={{ m: 1 }}>Add Todo</Button>
            <Button variant="outlined" color="error" onClick={clearAll} sx={{ m: 1 }}>Clear All</Button>
        </Box>
    );
}

export default Todoforms;
