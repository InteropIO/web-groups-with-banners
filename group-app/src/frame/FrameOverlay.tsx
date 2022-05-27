import React, { useState } from "react"
import AutoFocusableInput from "../AutoFocusableInput";

interface FrameOverlayProps {
    close: () => void;
}

const FrameOverlay: React.FC<FrameOverlayProps> = ({ close }) => {
    const [inputText, setInputText] = useState("");

    return <div className="overlay">
        <div className="card bg-primary">
            <h3 className="card-header">This is a overlay in the frame</h3>
            <div className="card-body">
                <p>Overlay body text goes here.</p>
                <AutoFocusableInput value={inputText} onBlur={close} onChange={(e) => setInputText(e.target.value)} type={"text"} />
                <div>
                    <button onClick={close} className="btn btn-primary">Approve</button>
                    <button onClick={close} className="btn btn-link">Dismiss</button>
                </div>
            </div>
        </div>
    </div>
}

export default FrameOverlay;