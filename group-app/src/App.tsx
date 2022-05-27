import React, { useCallback, useContext, useEffect, useState } from 'react'
import Group from "@glue42/groups-ui-react";
import "@glue42/groups-ui-react/dist/styles/styles.css";
import "@glue42/theme/dist/components/reboot.css";
import "@glue42/theme/dist/components/themes.css";
import "@glue42/theme/dist/components/alert.css";
import "@glue42/theme/dist/components/buttons.css";
import "@glue42/theme/dist/components/forms.css";
import "@glue42/theme/dist/components/card.css";
import "@glue42/theme/dist/components/dropdown.css";
import "./index.css";
import CustomFlatCaptionBar from './frame/CustomFlatCaptionBar';
import TabBanner from './tabs/TabBanner';
import { GlueContext } from '@glue42/react-hooks';
import { Glue42 } from '@glue42/desktop';
import { SHARED_CONTEXT_NAME } from './constants';
import { SharedContextState } from './types';
import { getAppFromWindowId } from './utils';
import CustomFrameOverlay from './frame/CustomFrameOverlay';

declare var window: Window & { glue: Glue42.Glue }

const App = () => {
  (window as any).glue = useContext(GlueContext);
  const [sharedContextState, setSharedContextState] = useState<SharedContextState>({});

  const hideBanner = useCallback((windowId: string) => {
    const app = getAppFromWindowId(windowId);

    if (!app) {
      return;
    }

    const currentState = sharedContextState[app.name] || {};

    window.glue.contexts.update(SHARED_CONTEXT_NAME, {
      [app.name]: {
        ...currentState,
        banner: false
      }
    });
  }, [sharedContextState]);

  const hideOverlay = useCallback((windowId: string) => {
    const app = getAppFromWindowId(windowId);

    if (!app) {
      return;
    }

    const currentState = sharedContextState[app.name] || {};

    window.glue.contexts.update(SHARED_CONTEXT_NAME, {
      [app.name]: {
        ...currentState,
        overlay: false
      }
    });
  }, [sharedContextState]);

  useEffect(() => {
    window.glue.contexts.subscribe(SHARED_CONTEXT_NAME, (data) => {
      setSharedContextState(data);
    });
  }, []);

  const isBannerVisible = useCallback((windowId: string) => {
    const app = getAppFromWindowId(windowId);

    if (!app) {
      return false;
    }

    return !!sharedContextState[app.name]?.banner;
  }, [sharedContextState]);

  const isOverlayVisible = useCallback((windowId: string) => {
    const app = getAppFromWindowId(windowId);

    if (!app) {
      return false;
    }

    return !!sharedContextState[app.name]?.overlay;
  }, [sharedContextState]);


  return (
    <Group components={{
      flat: {
        CaptionBar: (props) => {
          return <CustomFlatCaptionBar {...props} closeBanner={hideBanner} IsBannerVisible={isBannerVisible} />
        }
      },
      frame: {
        Overlay: (props) => {
          return <CustomFrameOverlay
            {...props}
            isOverlayVisible={isOverlayVisible}
            close={() => hideOverlay(props.selectedWindow)} />
        }
      },
      tabs: {
        Below: (props) => {
          return <TabBanner {...props}
            isBannerVisible={isBannerVisible}
            close={() => hideBanner(props.selectedWindow)} />
        }
      }
    }} />
  );
};

export default App;
