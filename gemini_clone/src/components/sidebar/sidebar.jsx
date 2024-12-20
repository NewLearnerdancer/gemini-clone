import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'

const sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="menu icon" />
                <div className="new-chat">
                <img src={assets.plus_icon} alt="plus icon" />
                  {extended ?   <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message icon" />
                        <p>What is react ...</p>

                    </div>
                </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                   {extended? <p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history_icon" />
                   {extended? <p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>

        </div>
    )
}

export default sidebar