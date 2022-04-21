import {useState, useEffect} from "react";
import './Post.css';
import { Avatar } from '@material-ui/core';
import { MdThumbUp, MdInsertComment, MdSend, MdSaveAlt } from 'react-icons/md';
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


function Post({timestamp, username, profilePic}) {

    // Crud
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
    const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    //console.log(data);
    setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
    }, []);

  return(
    <>
      {users.map((user) => {
                return (
                  <div className="post">
                    {""}
                    <div className='post__top'>
                      <Avatar src={profilePic} />
                        <div className='post__topInfo'>
                            <h3>{username}</h3>
                            <p>{timestamp}</p>
                        </div>
                    </div>
                    
                    <div className="post__bottom" db={db}>
                      <p>{user.message}</p>
                    </div>
                    <div className="post__image">
                      <img src={user.image} alt="" />
                    </div>

                    <div className='post__options'>
                        <div className='post__option'>
                            <MdThumbUp size={20} />
                            <p>Like</p>
                        </div>
                        <div className='post__option'>
                            <MdInsertComment size={20} />
                            <p>Comment</p>
                        </div>
                        <div className='post__option'>
                            <MdSend  size={20} />
                            <p>Share</p>
                        </div>
                        <div className='post__option'>
                            <MdSaveAlt size={20} />
                            <p>Save</p>
                        </div>
                    </div>
                 </div>
                );
              })}
    </>
  );
}

export default Post;