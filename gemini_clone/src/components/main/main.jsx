import { useContext, useState } from 'react'
import { Context } from '../../context/context'
import "./main.css"
import { assets } from '../../assets/assets'

const Main = () => {
    const { onSent, result, loading } = useContext(Context);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            onSent(input);
            setInput("");
        }
    }

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user icon" />
            </div>
            
            <div className="main-container">
                {!result ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="compass icon" />
                            </div>
                            <div className="card" onClick={() => setInput("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="bulb icon" />
                            </div>
                            <div className="card" onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="message icon" />
                            </div>
                            <div className="card" onClick={() => setInput("Improve the readability of the following code")}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="code icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user icon" className="user-icon" />
                            <p>You</p>
                        </div>
                        <p className="query">{input}</p>
                        
                        <div className="result-title">
                            <img src={assets.gemini_icon} alt="gemini icon" />
                            <p>Gemini</p>
                        </div>
                        <p className="response">{result}</p>
                    </div>
                )}
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder='Enter a prompt here' 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="gallery icon" />
                        <img src={assets.mic_icon} alt="mic icon" />
                        <img 
                            src={assets.send_icon} 
                            alt="send icon" 
                            onClick={handleSend}
                            style={{cursor: 'pointer', opacity: input.trim() ? 1 : 0.5}}
                        />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    )
}

export default Main