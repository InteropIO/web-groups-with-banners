import { Glue42 } from "@glue42/desktop";

declare var window: Window & { glue: Glue42.Glue }

export const getAppFromWindowId = (windowId: string) => {
    if (!windowId) {
        return;
    }
    try {
        return window.glue.windows.findById(windowId)?.application;
    } catch (error) {
        return undefined;
    }
}