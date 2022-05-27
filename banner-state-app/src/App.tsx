import React, { useContext } from 'react';
import '@glue42/theme/dist/components/reboot.css';
import '@glue42/theme/dist/components/themes.css';
import '@glue42/theme/dist/components/list-group.css';
import '@glue42/theme/dist/components/buttons.css';
import './App.css';
import { GlueContext } from '@glue42/react-hooks';
import AppList from './AppList';

const App = () => {
  (window as any).glue = useContext(GlueContext);
  return <div className='container-fluid'>
    <h3>Open banners and overlays in apps</h3>
    <AppList />
  </div>
}

export default App;
