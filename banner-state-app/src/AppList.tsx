import { Glue42 } from "@glue42/desktop";
import React, { useEffect, useState } from "react";
import ApplicationRow from "./ApplicationRow";

declare var window: Window & { glue: Glue42.Glue };

const AppList: React.FC<object> = () => {
    const [applications, setApplications] = useState<Glue42.AppManager.Application[]>([]);

    const isApplicationSuitable = (a: Glue42.AppManager.Application) => {
        return a.instances.length > 0 && a.type === "window" && !a.hidden;
    }

    useEffect(() => {
        const appsWithInstance = window.glue.appManager.applications().filter(isApplicationSuitable);

        setApplications(appsWithInstance);
    }, []);

    useEffect(() => {
        const unsubStarted = window.glue.appManager.onInstanceStarted((i) => {
            if (isApplicationSuitable(i.application) && !applications.some(a=>a.name===i.application.name)) {
                setApplications(s => [...s, i.application]);
            }
        });

        const unsubStopped = window.glue.appManager.onInstanceStopped((i) => {
            if (i.application.instances.length === 0) {
                setApplications(s => s.filter(a => a.name !== i.application.name));
            }
        });

        return () => {
            unsubStarted();
            unsubStopped();
        }
    }, [applications]);

    const renderApplications = () => {
        return applications.map(a => <ApplicationRow application={a} />)
    }

    return <div className="list-group">
        {renderApplications()}
    </div>

}

export default AppList;