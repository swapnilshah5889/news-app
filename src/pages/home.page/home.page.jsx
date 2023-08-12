import { Typography, Pagination, Link } from "@mui/material";
import './home.page.styles.scss';
import Logo from '../../assets/app-logo.png';
import NewsGrid from "../../components/news.container/news.container.component";
import { ArticlesJson, API_ENDPOINTS } from "../../utils";
import { useEffect, useState } from "react";
import MyLoader from "../../components/loader/loader.component";
import Fade from "@mui/material/Fade";
import axios from "axios";

const HeaderText = ({keyText, valueText, link}) => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',
        width:'100%', 
        marginLeft:'1px',
        marginRight:'1px',
        backgroundColor:"#444444"}}>
            <Typography style={{fontSize:'9px', marginRight:'5px'}}>{keyText}</Typography>
            <Link
            underline="none" 
            style={{fontSize:'10px', marginLeft:'5px'}} href={link?link:"#"}>{valueText}</Link>
        </div>
    )
}

const HomePage = () => {

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(undefined);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // Fetch articles api
    const fetchArticles = async () => {
        setIsLoading(true);
        // setTimeout(() => {
        //     try {
            
        //         setArticles(ArticlesJson);
        //         setIsLoading(false);
        //         setTotalPages(10);
        //         window.scrollTo(0, 0);
    
        //     } catch (error) {
        //         console.error(error);
        //         setIsLoading(false);
        //     }
        // }, 3000);

        try {

            const config = {
                headers: {
                    'x-api-key':'6tkOyL3X-Eqdzmw4u20ZRooKhtkF5EMQzNuvrSLkg7E'
                }
            }
            
            const response = await axios.get(
                API_ENDPOINTS.LATEST_NEWS + "&page="+page,
                config);
            
            
            if(response.status === 200) {
                console.log(response.data);
                const jsonData = response.data;
                if(!totalPages) {
                    setTotalPages(jsonData.total_pages);
                }
                setArticles(jsonData.articles);

            }
            // Show Error & Try Again
            else {
                console.log("Error");
                console.log(response);
            }
            setIsLoading(false);
            window.scrollTo(0, 0);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    // Fetch new articles on page change
    useEffect(() => {
        fetchArticles();
    }, [page])

    
    return (
        <>
        
            {/* Heading */}
            <div>

                {/* Logo */}
                <div className="div-app-title-container">
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
                
            </div>

            {/* Loader & Home Page */}
            {  isLoading ? (
                <div
                    style={{
                        height:"70vh",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                    <MyLoader/>
                </div>
            ) : (
                
                <Fade
                in enter exit 
                timeout={{
                    appear: 1500,
                    enter: 1000,
                    exit: 1500  ,
                   }}>
                <div>
                    {/* News Feed */}
                    <NewsGrid 
                        articlesJson={articles}
                    />
        
                </div>
                </Fade>
            )
            }

            {/* Pagination */}
            {totalPages &&
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px', marginBottom:'30px'}}>
                    <Pagination page={page} count={totalPages} color="primary" onChange={handleChange}/>
                </div>  
            }   

            <div style={{
                    margin:'0%',
                    display:'flex', 
                    justifyContent:'space-evenly'
                }}>
                    <HeaderText keyText={"Powered By:"} link={"newscatcherapi.com"} valueText={"newscatcherapi.com"} />
                    <HeaderText keyText={"Created By:"} link={"https://swapnilshah5889.github.io/"} valueText={"Swapnil Shah"} />
            </div>
        </> 
    )
}

export default HomePage;
