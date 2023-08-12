import React, { useState } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { height } from '@mui/system';
import './news.card.styles.scss';

const NewsCard = ({articleJson, index, onClick}) => {


    const handleLearnMore = () => {
        window.open(articleJson.link, "_blank", "noreferrer");
    } 

    return (
        <Card 
            onClick={() => {onClick(index);}}
            sx={{
                backgroundColor:'#272727',
                cursor: 'pointer',
                ':hover':{
                    backgroundColor:'#353535'
                }
            }}
            className='card-news'
            raised
        >
            <CardMedia
                sx={{ height: 200 }}
                image={articleJson.media}
                title="news image"
            />
            <CardContent>
                <Typography 
                    className='typography-card-title'
                    gutterBottom variant="body">
                    {articleJson.title}
                </Typography>
                <Typography 
                    className='typography-card-body'
                    variant="body">
                    {articleJson.excerpt}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View Details</Button>
                <Button size="small" onClick={handleLearnMore}>Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
