import { Typography } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import './icon.text.styles.scss';

const IconText = ({ text, icon }) => {
  return (
    <div 
        className="div-icon-text-ctn">
        
          <SvgIcon 
            className="svgicon-icon" 
            component={icon}/>
          <Typography 
            className="svgicon-text"
          >{text}</Typography>
    
    </div>
  )
}

export default IconText;
