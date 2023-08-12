import './news.detailed.styles.scss';
import { Modal, Typography, Box } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconText from '../icon-text/icon.text.component';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { openLinkNewWindow } from '../../utils';
import { useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '500px',
    maxHeight: '90%',
    bgcolor: '#232323',
    boxShadow: 24,
    overflowY: 'auto',
    p: 4,
};


const NewsDetailedModal = ({isOpen, articleJson, handleClose}) => {

    useEffect(() => {
        if(articleJson) {
            const date = Date.parse(articleJson.published_date);
            console.log(date.toString());
        }
    }, [articleJson]);

  return (
    <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        style={{
            overflow:'scroll',
        }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
    >
        <Fade in={isOpen}>
            <Box sx={style}>

                <div className='div-news-detailed-ctn'>

                    {/* Image */}
                    <img
                        className='img-news-detailed' 
                        src={articleJson?.media} 
                        alt='news image' />
                    
                    {/* date and url */}
                    <div style={{display:'flex', justifyContent:'space-between', width:'100%', padding:'10px'}}>
                        <IconText text={articleJson?.published_date.split(" ")[0]} icon={CalendarMonthIcon} />
                        <div
                        onClick={()=>{openLinkNewWindow(articleJson.link);}}>
                            <IconText text={articleJson?.clean_url} icon={OpenInNewIcon} />
                        </div>
                    </div>
                    
                    {/* Title */}
                    <Typography className='typography-title'>
                        {articleJson?.title}
                    </Typography>
                    <Typography className='typography-description'>
                        {articleJson?.summary}
                    </Typography>
                </div>
            </Box>
        </Fade>
    </Modal>
  )
}

export default NewsDetailedModal;
