import {useState} from "react";
import "./GifModal.css";
import { Button } from '@material-ui/core';

let APIKEY = "zQ9bzBPiXURJPSGFOF6CXvEnzE8tJeCl";
const GIPHY_API = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&q=`;

let GifModal = ({closeGifModal, viewGif, showGif}) => {

    const [show] = useState(true);

    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
    let [loading, setLoading] = useState(false);
    let searchGif = () =>{
        if(search.length > 0){
            setLoading(true);
            fetch(GIPHY_API+search)
            .then((res)=>{
                setLoading(false);
                return res.json();
            })
            .then((result)=>{
                setGifs(result.data.map((gif)=>{
                    return gif.images.fixed_height.url;
                    
                }))
            })
            .catch(()=>{
                setLoading(false);
                alert("Something Went Wrong..");
            })
        }
    } 
  return (

    <>

    <div className="gifModalBackground">
        <div className="gifModalContainer">
            <div className="gifModalTop">
                <h2 className="gifModalTitle">Search Gifs</h2>
                <Button
                    className="gifCloseBtn"
                    onClick={() => {
                    closeGifModal(false);
                    }}>
                    X
                </Button>
            </div>

            <div className="gifBody">
                <input type="text"
                    className="gifModal__input"
                    placeholder="Search GIFs" 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                <Button className="searchGif" onClick={searchGif}>
                    Search
                </Button>
            </div>

            <div className="result">
                {    
                (loading) ? (  
                <div className="loading">
                    <div className="loader">
                    </div>
                </div>
                ) : (
                <div className="list">
                    {
                        gifs.map((gif)=>{
                            return (
                                <div className="item"
                                onClick={()=>{
                                    viewGif(gif);
                                    showGif(show);
                                    closeGifModal(false);
                                }}
                                >
                                <img className="gifImage" src={gif} 
                                alt=""/>
                                </div>
                            )
                        })
                    }
                </div>
                )
                }
            </div>
        </div>
    </div>
    </>
  );
}

export default GifModal;