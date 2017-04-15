import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Class based component
class AlbumList extends Component {
    // class level property
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

// Rules of State
// Definition of state: a plain javascript object used to record and respond to user-triggered events
// When we need to update what a component shows, call this.setState
// Only change state with setState, do not do this.state

// Whenever we want commmunicate from parrent to child component we use props (pass data from parrent to child)
// State is using for internal component record keeping (update data)

// React API
// props, state, lifecycle method, functional component, class based component
