import React from 'react'
import './news.container.styles.scss';
import NewsCard from '../news.card/news.card.component';
import { Grid } from '@mui/material';

const NewsGrid = ({articlesJson}) => {

    
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
                                articleJson={article}
                            /> 
                        </Grid>
                    )
                })}
            </Grid>


        </div>
    )
}

export default NewsGrid;
