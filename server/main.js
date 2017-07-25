import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';


Meteor.startup(function () {
    Players.insert({
        name: 'vikram',
        score: 22
        });
    console.log(Players.find().fetch());
});