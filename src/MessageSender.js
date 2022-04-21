import { useState } from 'react';
import './MessageSender.css';
import Modal1 from './Modal1';
import {MdVideocam, MdPhotoLibrary, MdOutlineEmojiEmotions} from 'react-icons/md';
import {Avatar } from '@material-ui/core';

function MessageSender() {

    const [openModal, setOpenModal] = useState(false);

  return ( 
  <div className='messageSender'>
      
      <div className='messageSender__top'>
          <Avatar src='https://yt3.ggpht.com/1jhADNxW6B3MsRgittEDYD-OSMGCtiZ5t2MB_ytBV-Q4gw1eL0tV_VszPsbMKicAjS0roO-cwoU=s900-c-k-c0x00ffffff-no-rj' />
          <form>
              <input 
              onClick={() => {
                  setOpenModal(true);
                }}
              className='messageSender__input' type='text'
              placeholder={"What's On Your Mind, Sammed..?"}
              />
          </form>
      </div>

      {openModal && <Modal1 closeModal={setOpenModal} />}  

      <div className='messageSender__bottom'>
          <div className='messageSender__option'>
              <MdVideocam style={{color:'red'}} size={20}/>
              <h4>Live Video</h4>
          </div>

          <div className='messageSender__option'>
              <MdPhotoLibrary style={{color:'blue'}} size={20}/>
              <h4>Photo/Video</h4>
          </div>

          <div className='messageSender__option'>
              <MdOutlineEmojiEmotions style={{color:'violet'}} size={20}/>
              <h4>Feeling</h4>
          </div> 
        </div>

      </div>
  );
}

export default MessageSender;