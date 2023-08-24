import { TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";

export const InputLabel = ({labelText}) => {

    return (
        <Typography 
        style={{margin:'2px', fontSize:'13px', color:'#ccc'}}>
            {labelText}
        </Typography>
    );
}

export const PhoneInputField = ({textFieldClassName="", textLabel, onTextChange, textId, textValue}) => {

    return (
        <div 
        className={textFieldClassName}
        style={{display:"flex", flexDirection:"column"}}>
            
            <InputLabel labelText={textLabel}/>
            <PhoneInput
                id={textId}
                value={textValue}
                country={'us'}
                specialLabel=""
                inputStyle={{
                    color: 'white',
                    fontSize: '15px',
                    height: '50px',
                    width: '95%',
                    paddingLeft:'10px',
                    border: '1px solid #555',
                    borderRadius:'5px'
                }}
                onChange={onTextChange}
            />
        </div>
    );
}


const MyTextField = ({onTextChange, textLabel, textFieldClassName="", textFieldType="text", textValue="", textId}) => {
  return (
    <div 
    className={textFieldClassName}
    style={{display:"flex", flexDirection:"column"}}>
        
        <InputLabel labelText={textLabel}/>
        <TextField
            id={textId}
            value={textValue}
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
                    fontSize: '15px'
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
