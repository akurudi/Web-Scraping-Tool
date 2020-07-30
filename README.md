# Web Scraping Tool
Demo: https://web-scraping-tool.akurudi.now.sh/

A tool that can scrape a given URL for useful content like canonical tags, hreflangs, open graph tags and so on. It uses an API server hosted on heroku: https://webscraper-api.herokuapp.com to make it's requests. More information on the API server can be found here: [Web Scraping API](https://github.com/akurudi/Web-Scraping-API).

Full list of features provided by this app are:

1. Canonical
2. Hreflangs
3. Headings (H1, H2 and H3)
4. Open Graph
5. Title
6. Meta Description
7. Meta Keywords

## Tech Stack
1. ReactJS
2. MaterialUI
3. Zeit Now

## Installation
You can install project dependacies using either `npm` or `yarn`.

## Usage

### App Configuration

Endpoint for API is set in `/src/utils/apiEndpoint.js`. By default, it uses https://webscraper-api.herokuapp.com from [Web Scraping API](https://github.com/akurudi/Web-Scraping-API).

Features/Options provided in the app are configured in `/src/utils/switchConfig.js`. This contains an array of objects that are used to render the "Select Features" section of the app. The order in which the objects appear in array is the same order in which they are rendered in the app.

Example object from `/src/utils/switchConfig.js`
```
{
  value: "canonical", //Value assigned to this control in the app.
  label: "Canonical", //Label given for this option in the UI.
  checked: true //Wheather to enable or disbale this option by default.
}
```

### Running The App
This app is built using [Create React App](https://github.com/facebook/create-react-app) so, all default scripts apply.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```

## Theming
App is built using [Material UI](https://material-ui.com/) components. Theme configuration for app is done using a `<ThemeProvider>` that accepts a `theme` property. You can customize the theme by editing `src/utils/theme.js`.

