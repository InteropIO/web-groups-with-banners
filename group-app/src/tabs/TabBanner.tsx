import React from "react"

interface TabBannerProps {
    close: () => void;
    selectedWindow: string;
    isBannerVisible: (windowId: string) => boolean;
}

const TabBanner: React.FC<TabBannerProps> = ({ close, isBannerVisible, selectedWindow }) => {
    return <>{isBannerVisible(selectedWindow) && <div className="banner banner-tab">
        <div className="alert alert-warning alert-dismissible fade show alert-sm" role="alert">
            <button type="button" className="close"  onClick={close}>
                <span aria-hidden="true">×</span>
            </button>
            Alert. You should check in on some of those fields below.
        </div>
    </div>}</>
}

export default TabBanner;