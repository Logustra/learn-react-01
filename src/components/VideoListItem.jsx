import React from 'react';
import { ListGroupItem, Media } from 'react-bootstrap';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    
    return (
        <ListGroupItem onClick={() => onVideoSelect(video)}>
            <Media>
                <Media.Left>
                    <img width="70" height="70" src={imgUrl} alt="thumbnail" />
                </Media.Left>

                <Media.Body>
                    <Media.Heading>{title}</Media.Heading>
                </Media.Body>
            </Media>
        </ListGroupItem>
    )
}

export default VideoListItem;