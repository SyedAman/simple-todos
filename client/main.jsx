import { Meteor } from 'meteor/meteor';
import { React } from 'react';
import { render } from 'react-dom';

Meteor.startup(() => {
    // render App.jsx to render-target div tag in main.html
    render(<App />, document.getElementById('render-target'));
})