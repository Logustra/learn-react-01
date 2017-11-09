import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import VideoListItem from './VideoListItem';

const VideoList = props => {
    const VideoItems = props.videos.map( video => {
        return (
            <VideoListItem
                key={video.etag}
                video={video}
                onVideoSelect={props.onVideoSelect}
            />
        )
    });

    return (
        <Col md={4}>
            <ListGroup>
                {VideoItems}
            </ListGroup>
        </Col>
    )
}

export default VideoList;