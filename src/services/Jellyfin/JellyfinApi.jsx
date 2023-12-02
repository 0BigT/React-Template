import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Widget } from 'components/Widget/Widget';

export default function JellyfinDetails() {
    // UseStates
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || null);
    const [playingInfo, setPlayingInfo] = useState(null);
    const [playbackStatus, setPlaybackStatus] = useState(null);

    // Constants
    const serverUrl = process.env.REACT_APP_JELLYFIN_URL;
    const authorization = `MediaBrowser Client="Jellyfin Web", Device="Web Client", DeviceId="fa48a59236323423495e8172451fe573", Version="10.7.0`;

    // Variables
    let auth = `MediaBrowser Client="Jellyfin Web", Device="Firefox", DeviceId="TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0OyBydjo5NC4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94Lzk0LjB8MTYzODA1MzA2OTY4Mw11", Version="10.7.6", Token="${accessToken}"`;

    // Get access token
    const getAccessToken = async () => {
        try {
            const response = await fetch(`${serverUrl}/Users/AuthenticateByName`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization,
                },
                body: JSON.stringify({
                    Username: process.env.REACT_APP_JELLYFIN_USERNAME,
                    Pw: process.env.REACT_APP_JELLYFIN_PASSWORD,
                }),
            });

            if (response.ok) {
                // toast.success('Jellyfin server is running.', { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
                const data = await response.json();
                return data.AccessToken;
            } else {
                throw new Error('Jellyfin server is not running or not reachable.');
            }
        } catch (error) {
            // toast.error(error.message, { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
        }
    };

    // Get information about the content being watched
    const getPlayingInfo = async (token) => {
        try {
            const response = await fetch(`${serverUrl}/Sessions?ActiveWithinSeconds=1800`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`,
                },
            });
            
            if (response.ok) {
                const sessions = await response.json();

                // Check if there are sessions
                if (sessions.length > 0) {
                    // Loop through sessions
                    sessions.forEach((session) => {
                        // if active session is playing content
                        if (session?.NowPlayingItem) {
                            const itemId = session.NowPlayingItem.Id;
                            const playbackStatus = session.PlayState.IsPaused ? 'Pause' : 'Unpause';
                            setPlaybackStatus(playbackStatus);
                            
                            // Get image of the played content
                            fetch(`${serverUrl}/Items/${itemId}/Images/Primary`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            }).then((response) => {
                                setPlayingInfo({
                                    name: session.NowPlayingItem.Name,
                                    duration: session.NowPlayingItem.RunTimeTicks,
                                    currentTime: session.PlayState.PositionTicks,
                                    image: response.url,
                                    itemId: itemId,
                                    user_id: session.UserId,
                                    session_id: session.Id,
                                    playbackStatus: playbackStatus,
                                });
                            });
                        }
                    });
                } else {
                    throw new Error('No active session found.');
                }
            } else {
                throw new Error('Jellyfin server is not running or not reachable.');
            }

        } catch (error) {
            // toast.error(error.message, { position: toast.POSITION.TOP_RIGHT, autoClose: 2500 });
        }
    };

    // Function to control the playback
    const controlPlayback = async (command) => {
        try {
            const sessionId = playingInfo?.session_id;
    
            const response = await fetch(`${serverUrl}/Sessions/${sessionId}/Playing/${command}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${auth}`,
                },
            });

            console.log('response: ', response);
            
            if (response.ok) {
                setPlaybackStatus(command);
            }
        } catch (error) {
            // toast.error('Jellyfin server is not running or not reachable.', {
            //     position: toast.POSITION.TOP_RIGHT,
            //     autoClose: 2500,
            // });
        }
    };
    
    // Function to play the content
    const play = () => {
        controlPlayback('Unpause');
    };
    
    // Function to pause the content
    const pause = () => {
        controlPlayback('Pause');
    };
    
    // Function to stop the content
    const stop = () => {
        controlPlayback('Stop');

        const widget = document.querySelector('.widget-card');
        widget.classList.remove('animate__fadeInDown');
        widget.classList.add('animate__fadeOutUp');

        // wait for animation and reset playing info
        setTimeout(() => {
            setPlayingInfo(null);
        }, 1000);
    };

    // Set accessToken if empty else get playing info
    useEffect(() => {
        if (accessToken === null) {
            getAccessToken().then((token) => {
                setAccessToken(token);
                localStorage.setItem('accessToken', token);
            });
        } else {
            // getPlayingInfo(accessToken);
        }
    }, [accessToken]);

    // Regularly check for playing info
    useEffect(() => {
        getPlayingInfo(accessToken);

        const interval = setInterval(() => {
            getPlayingInfo(accessToken);
        }, 120000);
        return () => clearInterval(interval);
    }, [accessToken]);

    return (
        <div>
            {playingInfo && <Widget type={'player'} data={playingInfo} playbackStatus={playbackStatus} play={play} pause={pause} stop={stop} />}
            {!playingInfo && <p>No active session has been found.</p>}
        </div>
    );
}