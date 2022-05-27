import React from "react";
import FrameOverlay from "./FrameOverlay";

interface CustomFrameOverlayProps {
    isOverlayVisible: (windowId: string) => boolean;
    selectedWindow: string;
    close: () => void;
}

const CustomFrameOverlay: React.FC<CustomFrameOverlayProps> = ({ isOverlayVisible, selectedWindow, close }) => {
    return <> {isOverlayVisible(selectedWindow) && <FrameOverlay close={close} />}</>
}

export default CustomFrameOverlay;