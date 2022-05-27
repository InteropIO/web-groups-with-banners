import { FlatButtons, FlatCaption, FlatCaptionBarProps, FlatChannelSelector, FlatMoveArea } from "@glue42/groups-ui-react";
import React, { CSSProperties } from "react";
import FrameBanner from "./FrameBanner";

interface CustomFlatCaptionBarProps extends FlatCaptionBarProps {
    IsBannerVisible: (windowId: string) => boolean;
    closeBanner: (windowId: string) => void;
}

const CustomFlatCaptionBar: React.FC<CustomFlatCaptionBarProps> = ({ IsBannerVisible, closeBanner, channels, moveAreaId, caption, frameId, selectedWindow, ...rest }) => {
    const style: CSSProperties = {
        display: "flex",
        flexDirection: "column"
    };

    return (
        <div style={style}>
            <div className="t42-react-caption-bar">
                {channels?.visible && <FlatChannelSelector {...channels} />}
                <FlatMoveArea moveAreaId={moveAreaId}>
                    <FlatCaption caption={caption} />
                </FlatMoveArea>
                <FlatButtons {...rest} />
            </div>
            {IsBannerVisible(selectedWindow) && <FrameBanner close={() => closeBanner(frameId)} />}
        </div>
    )
}

export default CustomFlatCaptionBar;