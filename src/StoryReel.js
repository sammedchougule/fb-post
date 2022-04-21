import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return <div className='storyReel'>
      {/* Story */}
      <Story image='https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      profileSrc='https://yt3.ggpht.com/1jhADNxW6B3MsRgittEDYD-OSMGCtiZ5t2MB_ytBV-Q4gw1eL0tV_VszPsbMKicAjS0roO-cwoU=s900-c-k-c0x00ffffff-no-rj'
      title='Sammed C'
      />
      <Story image='https://www.dkoding.in/wp-content/uploads/Jeff-Bezos-Success-Mantras-Feature-Newsline-DKODING.jpg'
      profileSrc='https://assets.change.org/photos/6/km/ak/qSKMAkEcYctRuhN-800x450-noPad.jpg?1623290687'
      title='Jeff Bezoz'
      />
      <Story image='https://www.gatesfoundation.org/-/media/gfo/2home/home_ourstory_pga1287486_fc235844.jpg'
      profileSrc='https://cdn.geekwire.com/wp-content/uploads/2021/02/gatesporttrait-630x514.jpeg'
      title='Bill Gates'
      />
      <Story image='https://image.stern.de/7967834/t/hW/v2/w1440/r1/-/zuckerberg.jpg'
      profileSrc='https://variety.com/wp-content/uploads/2018/10/mark_zuckerberg.png'
      title='Zucker Berg'
      />
      <Story image='https://mumbaimirror.indiatimes.com/photo/72232707.cms'
      profileSrc='https://upload.wikimedia.org/wikipedia/commons/5/58/Sudha_Murthy.jpg'
      title='Sudha Murthy'
      />
  </div>;
}

export default StoryReel;