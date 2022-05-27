import React from "react"
import { Glue42 } from "@glue42/desktop";
import { SHARED_CONTEXT_NAME } from "./constants";

interface ApplicationRowProps {
    application: Glue42.AppManager.Application
}

declare var window: Window & { glue: Glue42.Glue };

const ApplicationRow: React.FC<ApplicationRowProps> = ({ application }) => {

    const onBannerClick = () => {
        window.glue.contexts.get(SHARED_CONTEXT_NAME).then((currentContext) => {
            const currentAppContext = currentContext[application.name] || {};
            const newValue = {
                ...currentAppContext,
                banner: !currentAppContext.banner
            };
            return window.glue.contexts.update(SHARED_CONTEXT_NAME, { [application.name]: newValue });
        }).catch(console.log);
    }

    const onOverlayClick = () => {
        window.glue.contexts.get(SHARED_CONTEXT_NAME).then((currentContext) => {
            const currentAppContext = currentContext[application.name] || {};
            const newValue = {
                ...currentAppContext,
                overlay: !currentAppContext.overlay
            };
            return window.glue.contexts.update(SHARED_CONTEXT_NAME, { [application.name]: newValue });
        }).catch(console.log);
    }

    return <div className="list-group-item">
        <span>{application.name}</span>
        <div>
            <button onClick={onBannerClick} className="btn btn-secondary">Banner</button>
            <button onClick={onOverlayClick} className="btn btn-secondary">Overlay</button>
        </div>
    </div>
}

export default ApplicationRow