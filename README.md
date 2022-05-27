# groups-banner-demo

Demo which demonstrates the new web customization options of the Glue42 groups

## Prerequisites
- Glue42 Desktop 3.15+
- Node.js 14+

## Description
The demo consists of two react application which communicate with each other through `Shared contexts` the `State app` sets a flag whether an overlay or a banner should be shown for an application which is running and the group-app reacts to those context changes.

## How to start
- Run `npm install` in both the `banner-state-app` and the `group-app`
- Run `npm start` in the `group-app` - this will start a development server on localhost:3000
- Run `npm start` in the `banner-state-app` - this will start a development server on localhost:3001
- To configure Glue42 Desktop to use the `group-app` you can go to the webGroup.json file which is located in `%Glue42 installation folder%\GlueDesktop\config\apps`
- In there you should add a `url` property in the details object with the value `"http://localhost:3000"` and ensure that the app is not disabled (doesn't have a flag `disable:true`)
- Then in the `apps` folder you should copy and paste the `state-app.json` config file from the `banner-state-app`
- Start Glue42 Desktop
- The `State app` should appear in the application toolbar
- Then you can start for example `Client List` and click on the banner button in the `State app` a banner in the `Client List` should appear