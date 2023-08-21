import Fade from '@mui/material/Fade';
import './news.container.styles.scss';
import NewsCard from '../news.card/news.card.component';
import { Grid } from '@mui/material';
import NewsDetailedModal from '../news.detailed/news.detailed.component';
import { useState } from 'react';

const NewsGridFader = ({articlesJson}) => {

    return (
        <Fade
            in
            enter
            exit
            timeout={{ 
                appear: 1500,
                enter: 1000,
                exit: 1500,
            }}
        >
            <div>
                <NewsGrid articlesJson={articlesJson} />
            </div>
        </Fade>
    );
};

const NewsGrid = ({articlesJson}) => {

    const [isDetailedCardOpen, setDetailedCardOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(-1);

    const handleModalClose = () => {
        setDetailedCardOpen(false);
    }

    const openDetailedModal = (index) => {
        setSelectedArticle(index);
        setDetailedCardOpen(true);
        console.log(index);
    }
    
    return (
        <div
            className='div-grid-container'
        >
            <Grid 
                container 
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12 }}>
                
                {articlesJson.map( (article, index) => {

                    return (
                        <Grid 
                            item 
                            key={index}
                            xs={4} sm={4} md={4}
                            >
                            <NewsCard 
                                index={index}
                                articleJson={article}
                                onClick={openDetailedModal}
                            /> 
                        </Grid>
                    )
                })}
            </Grid>

            {/* News Detailed Modal */}
            
            <NewsDetailedModal
                isOpen={isDetailedCardOpen}
                handleClose={handleModalClose}
                articleJson={articlesJson[selectedArticle]}
            />
        
            
        </div>
    )
}

export default NewsGridFader;
