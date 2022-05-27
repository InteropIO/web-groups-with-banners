export interface SharedContextState {
    [appName: string]: {
        banner: boolean;
        overlay: boolean;
    }
}
