import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Lauren',
    score: 99
}, {
    _id: '2',
    name: 'Cory',
    score: 43
    }, {
    _id: '3',
    name: 'Bert',
    score: 1
}];

const renderPlayers = function (playersList) {

    return playersList.map(function (players) {
        return <p key={players._id}>{players.name} has {players.score} points</p>;
    });
}
Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'Jeremy';
    let jsx = (
        <div>
            <h1> {title} </h1>
            <p> Hello {name}!</p>
            <p>This is my second p</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDom.render(jsx, document.getElementById('app'))
});