import {useState} from "react";
import "./Modal1.css";
import GifModal from './GifModal';
import { Button, Avatar } from '@material-ui/core';
import {MdPhotoLibrary, MdOutlineEmojiEmotions, MdLocationPin} from 'react-icons/md';
import {AiOutlineFileGif, AiFillTag} from 'react-icons/ai';
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

function Modal1({ closeModal }) {

  const [openGifModal, setOpenGifModal] = useState(false);

  const [gif, setGif] = useState('');

  const [show, setShow] = useState(false);

  const [message, setNewMessage] = useState("");
  const [image, setNewImage] = useState('');
  const usersCollectionRef = collection(db, "users");

    function createPost () {
    addDoc(usersCollectionRef, { message: message, image: image});
    };


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalTop">
          <h1 className="modalTitle">Create Post</h1>
          <Button
          className="titleCloseBtn"
            onClick={() => {
              closeModal(false);
            }}>
            X
          </Button>
        </div>
        
        <div className='modalAvatar'>
            <Avatar src='https://yt3.ggpht.com/1jhADNxW6B3MsRgittEDYD-OSMGCtiZ5t2MB_ytBV-Q4gw1eL0tV_VszPsbMKicAjS0roO-cwoU=s900-c-k-c0x00ffffff-no-rj' />
            <h5 className="modalId">Sammed Chougule</h5>
        </div>

        <div className="body">
            <form>
                <div className="viewImage">
                  {
                    show?
                    <input 
                    src={gif}
                    value={gif}
                    id="image"
                    onClick={(event)=> {
                    setNewImage(event.target.value)
                    }}
                    alt=""/>
                    :null
                  }
                </div>

                <input
                id="message"
                onChange={(event)=> {
                  setNewMessage(event.target.value)
                }}
                className='modal__input'
                type='text'
                placeholder={"What's On Your Mind, Sammed..?"}>
                </input>

            </form>
        </div>
        

        <div className='modal__bottom'>
                <div className='modal__option'>
                    <MdPhotoLibrary style={{color:'blue'}} size={20}/>
                </div>

                <div className='modal__option'>
                    <MdOutlineEmojiEmotions style={{color:'yellow'}} size={20}/>
                </div>

                <div className='modal__option'>
                    <AiFillTag style={{color:'orange'}} size={20}/>
                </div>

                <div className='modal__option'>
                    <MdLocationPin style={{color:'red'}} size={20}/>
                </div>

                <div className='modal__option'
                onClick={() => {
                  setOpenGifModal(true);
                }}
                >
                <AiOutlineFileGif style={{color:'green'}} size={20}/>
                </div>

            </div>

        <div className="footer">
          <Button className="postBtn" onClick={createPost}
          >Post</Button>
        </div>

        {openGifModal && <GifModal 
        viewGif={gif => setGif(gif)}
        showGif={show => setShow(show)}
        closeGifModal={setOpenGifModal} 
        />} 
        
      </div>
    </div>
    
  );
}

export default Modal1;