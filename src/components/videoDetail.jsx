import React from 'react';
import { Col, ResponsiveEmbed } from 'react-bootstrap';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <Col md={8}>
            <ResponsiveEmbed a16by9>
                <iframe src={videoUrl} title="blabla" frameBorder="0" allowFullScreen />
            </ResponsiveEmbed>
            <div className="video-info">
                <h3 className="video-title">{video.snippet.title}</h3>
                <div className="video-description">
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </Col>

    )
}

export default VideoDetail;