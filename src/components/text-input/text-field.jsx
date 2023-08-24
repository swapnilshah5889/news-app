import { TextField, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";

export const InputLabel = ({labelText, labelSize = '13px'}) => {

    return (
        <Typography 
        style={{margin:'2px', fontSize:{labelSize}, color:'#ccc'}}>
            {labelText}
        </Typography>
    );
}

export const ErrorLabel = ({labelText}) => {
    return (
        <Typography 
        style={{margin:'2px', fontSize:'11px', color:'#e00'}}>
            {labelText}
        </Typography>
    )
}

export const PhoneInputField = ({textFieldClassName="", textLabel, onTextChange, textId, 
                            textValue, isTextError=false, textErrorMsg=""}) => {

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
            {/* Error Message */}
            {isTextError && 
                <ErrorLabel 
                labelText={textErrorMsg}/>
            }
        </div>
    );
}


const MyTextField = ({onTextChange, textLabel, textFieldClassName="", textFieldType="text",
                     textValue="", textId, isTextError=false, textErrorMsg=""}) => {


    let colors = isTextError? ["#a00", "#f00", "#f00"] : ["#555", "#888", "#55a"];
    
  return (
    <div 
    className={textFieldClassName}
    style={{display:"flex", flexDirection:"column"}}>
        
        {/* Input Label */}
        <InputLabel labelText={textLabel}/>
        {/* Input Field */}
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
                    border: `2px solid ${colors[0]}!important`,
                },
                '&:hover fieldset': {
                    border: `2px solid ${colors[1]}!important`,
                },
                '&:focus-within fieldset, &:focus-visible fieldset': {
                    border: `2px solid ${colors[2]}!important`,
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
        {/* Error Message */}
        {isTextError && 
            <ErrorLabel 
            labelText={textErrorMsg}/>
        }
    </div>
  )
}

export default MyTextField;
