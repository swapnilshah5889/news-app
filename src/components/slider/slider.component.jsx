import {Slider, Typography} from '@mui/material';

const InputSlider = ({labelText, onSliderChange, sliderId, sliderValue}) => {

    return(
        <div style={{display:'flex', alignItems:'center'}}>
            <Typography style={{fontSize:'12px', width:'30%', marginRight:'10px'}} >
                {labelText}
            </Typography>
            <Slider
                id={sliderId}
                name={sliderId}
                onChange={onSliderChange}
                aria-label="Always visible"
                defaultValue={sliderValue}
                value={sliderValue}
                step={1}
                min={0}
                max={10}
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export  default InputSlider;