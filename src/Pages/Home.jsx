import '../assets/styling/global.scss';

import Button from '../components/Button/Button';
import Grid from '../components/Grid/Grid';
import Block from '../components/Block/Block';
import Tag from 'components/Tag/Tag';
import Progress from 'components/Progress/Progress';
import TopScrollButton from '../components/TopScrollButton/TopScrollButton';
import Card, { Header, Body, Footer, Title, Subtitle, Text, Image, Actions, Overlay, Paragraph } from '../components/Card/Card';
import { SearchOutlined, StarFilled, StarOutlined, PushpinOutlined } from '@ant-design/icons';

// Jellyfin integration
import JellyfinDetails from '../services/Jellyfin/JellyfinApi';

const Home = () => {
    return (
        <div className='container mt-5'>
        <div className='container'>
            <div className='container-header flex flex-align-center gap-2'>
                <img src="assets/logo.png" alt="logo" className='logo' />
                <h2 className='text-color-primary'>
                    Components
                </h2>
            </div>
            

            <TopScrollButton />

            <Block title='Buttons' collapsed={true} className={'my-5'}>

                {/* primary buttons */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='sm' icon={SearchOutlined}>Small</Button>
                    <Button color='primary' size='md' icon={SearchOutlined}>Normal</Button>
                    <Button color='primary' size='lg' icon={SearchOutlined}>Large</Button>
                </div>

                {/* primary icon buttons */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='sm'>Small</Button>
                    <Button color='primary' size='md'>Normal</Button>
                    <Button color='primary' size='lg'>Large</Button>
                </div>

                {/* primary subtle buttons */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary-subtle' size='sm'>Small</Button>
                    <Button color='primary-subtle' size='md'>Normal</Button>
                    <Button color='primary-subtle' size='lg'>Large</Button>
                </div>

                {/* secondary buttons */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='secondary' size='sm'>Small</Button>
                    <Button color='secondary' size='md'>Normal</Button>
                    <Button color='secondary' size='lg'>Large</Button>
                </div>

                {/* secondary icon only buttons & disabled button */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='secondary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='transparent' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='primary' size='md' disabled>Normal</Button>
                </div>

                {/* sizing buttons */}
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='lg fl'>Remaining width</Button>
                    <Button color='secondary' size='lg'>Normal</Button>
                </div>

                {/* full width button */}
                <Button color='primary' size='lg fw'>Full Width</Button>

            </Block>

            <Block title='Cards' collapsed={false} className={'mb-5'}>
                {/* Default cards */}
                <Grid title={'Default'} customColTemplate={'repeat(auto-fit, minmax(300px, 1fr))'} gap={24} className={'mb-4'}>
                    <Card >
                        <Image className={'img_default-size'}>
                            <Overlay>
                                <Button
                                    color='primary-subtle'
                                    size='sm'
                                    className='position-absolute end-0 m-2 rounded btn-text_primary shadow'
                                    iconOnly={true}
                                    icon={PushpinOutlined}
                                ></Button>
                            </Overlay>
                            <img
                                src="https://images.unsplash.com/photo-1515718243101-7574266d2819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center pb-2'}>
                                <Title>
                                    Hoershoe Bend
                                </Title>

                                <Actions className={'text-color-primary'}>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </Actions>
                            </Header>

                            <Paragraph cutOff={true} cutOffLength={70} className={'pb-2'}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aspernatur laudantium provident!
                            </Paragraph>

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>

                    <Card >
                        <Image className={'img_default-size'}>
                            <Overlay>
                                <Button
                                    color='primary-subtle'
                                    size='sm'
                                    className='position-absolute end-0 m-2 rounded btn-text_primary shadow'
                                    iconOnly={true}
                                    icon={PushpinOutlined}
                                ></Button>
                            </Overlay>
                            <img
                                src="https://images.unsplash.com/photo-1576191919769-40424bb34367?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center pb-2'}>
                                <Title>
                                    Joshua Tree
                                </Title>

                                <Actions className={'text-color-primary'}>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </Actions>
                            </Header>

                            <Paragraph cutOff={true} cutOffLength={70} className={'pb-2'}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aspernatur laudantium provident!
                            </Paragraph>

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>

                    <Card >
                        <Image className={'img_default-size'}>
                            <Overlay>
                                <Button
                                    color='primary-subtle'
                                    size='sm'
                                    className='position-absolute end-0 m-2 rounded btn-text_primary shadow'
                                    iconOnly={true}
                                    icon={PushpinOutlined}
                                ></Button>
                            </Overlay>
                            <img
                                src="https://images.pexels.com/photos/13215883/pexels-photo-13215883.jpeg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center pb-2'}>
                                <Title>
                                    Antelope Canyon
                                </Title>

                                <Actions className={'text-color-primary'}>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </Actions>
                            </Header>

                            <Paragraph cutOff={true} cutOffLength={70} className={'pb-2'}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aspernatur laudantium provident!
                            </Paragraph>

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>
                </Grid>


                {/* Horizontal Rectangle cards */}
                <Grid title={'Horizontal'} customColTemplate={'repeat(auto-fit, minmax(350px, 1fr))'} gap={24} className={'mb-4'}>
                    <Card type={'horizontal'}  radius={'3px'} link='/' className={'shadow-hover'}>
                        <Image radius={'3px'}>
                            <img
                                src="https://www.themoviedb.org/t/p/original/xJnbMTrJ2fl1AXAKx34U4BPvOhs.jpg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'flex flex-align-center p-3'}>
                            <Header>
                                <Title>
                                    South Park
                                </Title>
                                <Tag className={'tag--primary py-2'} contentTitle={`Cartman's Mom Is a`} maxTitleLength={16}>S1 : E13</Tag>
                                <Progress value={13} max={330} className={'progress-bar-animated progress-bar-striped'} />
                            </Header>
                        </Body>
                    </Card>

                    <Card type={'horizontal'}  radius={'3px'} link='/' className={'shadow-hover'}>
                        <Image radius={'3px'}>
                            <img
                                src="https://alternativemovieposters.com/wp-content/uploads/2021/02/MelvinMago_BreakingBad.jpg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'flex flex-align-center p-3'}>
                            <Header>
                                <Title>
                                    Breaking bad
                                </Title>
                                <Tag className={'tag--primary py-2'} contentTitle={`Say My Name`} maxTitleLength={16}>S5 : E7</Tag>
                                <Progress value={52} max={62} className={'progress-bar-animated progress-bar-striped'} />
                            </Header>
                        </Body>
                    </Card>

                    <Card type={'horizontal'}  radius={'3px'} link='/' className={'shadow-hover'}>
                        <Image radius={'3px'}>
                            <img
                                src="https://www.themoviedb.org/t/p/original/bXd71QmEraF6hzt8RtmIYZf8IQj.jpg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'flex flex-align-center p-3'}>
                            <Header>
                                <Title>
                                    Narcos
                                </Title>
                                <Tag className={'tag--primary py-2'} contentTitle={`Explosivos`} maxTitleLength={16}>S1 : E6</Tag>
                                <Progress value={6} max={30} className={'progress-bar-animated progress-bar-striped'} />
                            </Header>
                        </Body>
                    </Card>
                </Grid>

                {/* Vertical Rectangle cards */}
                {/* <Grid title={'Vertical'} columns={3} gap={24} className={'mb-4'} overflow={'scroll'}> */}
                <Grid title={'Vertical'} columns={3} overflow={3} gap={24} className={'mb-4'}>    
                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'} objectPosition={'bottom'}>
                            <img
                                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                    <StarOutlined />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>

                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'}>
                            <img
                                src="https://images.pexels.com/photos/1785671/pexels-photo-1785671.jpeg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>

                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'}>
                            <img
                                src="https://images.pexels.com/photos/4152974/pexels-photo-4152974.jpeg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>

                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'} objectPosition={'bottom'}>
                            <img
                                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                    <StarOutlined />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>

                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'}>
                            <img
                                src="https://images.pexels.com/photos/1785671/pexels-photo-1785671.jpeg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>

                    <Card link='/' scalingAnimation={true}>
                        <Image className={'img_rectangle_big'}>
                            <img
                                src="https://images.pexels.com/photos/4152974/pexels-photo-4152974.jpeg"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center'}>
                                <Title>
                                    Card Title
                                </Title>

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </Actions>
                            </Header>
                        </Body>
                    </Card>
                </Grid>

                {/* Square cards */}
                <Grid title={'Squared'} customColTemplate={'repeat(auto-fit, minmax(300px, 1fr))'} gap={24} className={'mb-4'}>
                    <Card type='image' radius={'3px'} link='/'>
                        <Image className={'img_square scaling-animation'}>
                            <Overlay className={'flex flex-align-end text-white text-shadow'}>
                                <Header className={'card-header-hidden flex flex-space-between flex-align-center p-3 text-shadow'}>
                                    <Title>
                                        Card Title
                                    </Title>

                                    <Actions>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarOutlined />
                                    </Actions>
                                </Header>
                            </Overlay>
                            <img
                                src="assets/images/P1070603.JPG"
                                alt="test image"
                            />
                        </Image>
                    </Card>

                    <Card type='image' radius={'3px'} link='/'>
                        <Image className={'img_square scaling-animation'}>
                            <Overlay className={'flex flex-align-end text-white text-shadow'}>
                                <Header className={'card-header-hidden flex flex-space-between flex-align-center p-3 text-shadow'}>
                                    <Title>
                                        Card Title
                                    </Title>

                                    <Actions>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                    </Actions>
                                </Header>
                            </Overlay>
                            <img
                                src="assets/images/P1060219.JPG"
                                alt="test image"
                            />
                        </Image>
                    </Card>

                    <Card type='image' radius={'3px'} link='/'>
                        <Image className={'img_square scaling-animation'}>
                            <Overlay className={'flex flex-align-end text-white text-shadow'}>
                                <Header className={'card-header-hidden flex flex-space-between flex-align-center p-3 text-shadow'}>
                                    <Title>
                                        Card Title
                                    </Title>

                                    <Actions>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                    </Actions>
                                </Header>
                            </Overlay>
                            <img
                                src="assets/images/P1060180.JPG"
                                alt="test image"
                            />
                        </Image>
                    </Card>

                    <Card type='image' radius={'3px'} link='/'>
                        <Image className={'img_square scaling-animation'}>
                            <Overlay className={'flex flex-align-end text-white text-shadow'}>
                                <Header className={'card-header-hidden flex flex-space-between flex-align-center p-3 text-shadow'}>
                                    <Title>
                                        Card Title
                                    </Title>

                                    <Actions>
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                        <StarFilled />
                                    </Actions>
                                </Header>
                            </Overlay>
                            <img
                                src="assets/images/P1060128.JPG"
                                alt="test image"
                            />
                        </Image>
                    </Card>
                </Grid>
            </Block>

            <Block title='Empty' collapsed={true} className={'mb-5'}>

            </Block>

            <Block title='Jellyfin' collapsed={false} className={'mb-5'}>
                <JellyfinDetails />
                
                <p className='pb-2'>Example of a Jellyfin widget</p>
                <img src="assets/images/Jellyfin_Widget.png" alt="Jellyfin Widget Example" />
            </Block>
        </div>
    );
}

export default Home;