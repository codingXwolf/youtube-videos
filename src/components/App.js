import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state = { videos : [] }

    onMyInputSubmit = async myInput => { //instead of term
        const response = await youtube.get('/search', {
            params: {
                q: myInput
            }
        });
        this.setState({ videos: response.data.items});
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onMyInputSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;