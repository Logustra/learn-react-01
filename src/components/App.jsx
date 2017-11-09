import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './videoDetail';

import './../app.css';
const API = 'AIzaSyDwVp1cCXPCtxNwCESQXPrfca3sJvk4MyQ';
const results = '5';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.YTSearch('surfing');
    }

    YTSearch (term) {
        const FETCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${results}&q=${term}&key=${API}`;
        
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            const videos = json.items;
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const YTSearch = query => this.YTSearch(query);

        return (
            <Grid>
                <SearchBar onSearch={YTSearch}/>

                <Row>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList 
                        videos={this.state.videos} 
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    />
                </Row>
            </Grid>
        );
    }
}

export default App;