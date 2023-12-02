
import Progress from 'components/Progress/Progress';
import './Widget.scss';
import Card, { Header, Body, Footer, Title, Subtitle, Text, Image, Actions, Overlay, Paragraph } from 'components/Card/Card';
import { Play, Pause, X } from 'react-feather';
import { CaretRightOutlined, PauseOutlined, CloseOutlined } from '@ant-design/icons'; 
import Button from 'components/Button/Button';


// widget component
export function Widget({
    children,
    className,
    type = 'default',
    playbackStatus,
    play = () => {},
    pause = () => {},
    stop = () => {},
    data = {},
    ...props
}) {

    // default widget
    if (type === 'default') {
        return (
            <div className={`widget ${className}`} {...props}>
                {children}
            </div>
        );
    }
    
    // player info widget
    if (type === 'player') {
        return (
            <Card type={'horizonal'} radius={'6px'} objectPosition={'center'} className={'widget-card opaque animate__fadeInDown'}>
                <Image radius={'3px'} className={'linear-gradient'}>
                    <img
                        src={ data.image }
                        alt="Movie Banner"
                    />
                </Image>
                <Body className={'w-100 h-100'}>
                    <Header className={'h-100 flex flex-justify-center center flex-column p-2'}>
                        <Subtitle>
                                Now Playing
                            </Subtitle>
                        <Title>
                            { data.name }
                        </Title>
                        
                        <Actions className={'flex flex-justify-end flex-align-center ellipsis'}>
                            {playbackStatus == 'Unpause' && (
                                <Button color={'transparent'} size={'lg'} icon={PauseOutlined} iconOnly={true} onClick={pause} />
                            )}
                            {playbackStatus == 'Pause' && (
                                <Button color={'transparent'} size={'lg'} icon={CaretRightOutlined} iconOnly={true} onClick={play} />
                            )}

                            <Button color={'transparent'} size={'lg'} icon={CloseOutlined} iconOnly={true} onClick={stop} />
                        </Actions>
                    </Header>

                    <Progress value={data.currentTime} max={data.duration} className={'progress-bar-animated progress-bar-striped'} />
                </Body>
            </Card>
        );
    }
}