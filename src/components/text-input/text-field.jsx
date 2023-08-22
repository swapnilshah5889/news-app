import { TextField, Typography } from "@mui/material";

export const InputLabel = ({labelText}) => {

    return (
        <Typography 
        style={{margin:'2px', fontSize:'13px', color:'#ccc'}}>
            {labelText}
        </Typography>
    );
}


const MyTextField = ({onTextChange, textLabel, textFieldClassName="", textFieldType="text"}) => {

  return (
    <div 
    className={textFieldClassName}
    style={{display:"flex", flexDirection:"column"}}>
        
        <InputLabel labelText={textLabel}/>
        <TextField
            required
            type={textFieldType}
            placeholder={textLabel}
            sx={{   
                borderRadius: '5px',
            }}
            InputLabelProps={{
                sx: {
                    color: '#aaa',
                    textTransform: 'capitalize',
                },
            }}
            InputProps={{
            sx: {
                'fieldset': {
                    border: '2px solid #555!important',
                },
                '&:hover fieldset': {
                    border: '2px solid #888!important',
                },
                '&:focus-within fieldset, &:focus-visible fieldset': {
                    border: '2px solid #55a!important',
                },
            },
            }}
            inputProps={{
            sx: {
                color: 'white',
                fontSize: '15px',
            },
            }}
            FormHelperTextProps={{
                root: {
                    color:'white'
                },
            }}
            onChange={onTextChange}></TextField>
    </div>
  )
}

export default MyTextField;
