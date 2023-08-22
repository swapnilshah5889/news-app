import {Slider, Typography} from '@mui/material';

const InputSlider = ({labelText, onSliderChange}) => {

    return(
        <div style={{display:'flex', alignItems:'center'}}>
            <Typography style={{fontSize:'12px', width:'30%', marginRight:'10px'}} >
                {labelText}
            </Typography>
            <Slider
                name={labelText}
                onChange={onSliderChange}
                aria-label="Always visible"
                defaultValue={0}
                step={1}
                min={0}
                max={10}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export  default InputSlider;