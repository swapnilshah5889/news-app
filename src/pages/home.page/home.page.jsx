import { Typography, Pagination } from "@mui/material";
import './home.page.styles.scss';
import Logo from '../../assets/app-logo.png';
import NewsGrid from "../../components/news.container/news.container.component";
import { ArticlesJson } from "../../utils";
import { useEffect, useState } from "react";
import MyLoader from "../../components/loader/loader.component";
import Fade from "@mui/material/Fade";

const HomePage = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch articles api
    const fetchArticles = async () => {
        setIsLoading(true);
        setTimeout(() => {
            try {
            
                setArticles(ArticlesJson);
                setIsLoading(false);
    
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }, 5000);
    }


    useEffect(() => {

        fetchArticles();
    
    }, [])

    
    return (
        <>
        
            {/* Heading */}
            <div
                className="div-app-title-container"
            >
                {/* Logo */}
                <img 
                    className="img-title-logo"
                    src={Logo} 
                    alt="logo"/>
                {/* App Name */}
                <Typography
                    className="app-title"   
                >
                    News App
                </Typography>
            </div>

            {  isLoading ? (
                <div
                    style={{
                        height:"70vh",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        margin:"20px"
                    }}>
                    <MyLoader/>
                </div>
            ) : (
                
                <Fade
                in enter exit 
                timeout={{
                    appear: 1000,
                    enter: 700,
                    exit: 700,
                   }}>
                <div>
                    {/* News Feed */}
                    <NewsGrid 
                        articlesJson={articles}
                    />

                    {/* Pagination */}
                    <div style={{color:"red ", display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px', marginBottom:'30px'}}>
                        <Pagination count={10} />
                    </div>
                </div>
                </Fade>
            )
            }
        
        </> 
    )
}

export default HomePage;
