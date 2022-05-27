import React from "react"

interface FrameBannerProps {
    close: () => void;
}

const FrameBanner: React.FC<FrameBannerProps> = ({ close }) => {
    return <div className="banner">
        <div className="alert alert-danger alert-dismissible fade show alert-sm" role="alert">
            <button type="button" className="close" onClick={close} >
                <span aria-hidden="true">×</span>
            </button>
            Danger Alert. 
        </div>
    </div>
}

export default FrameBanner;