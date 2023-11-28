// import button
import Button from '../components/Button/Button';
import Grid from '../components/Grid/Grid';
import Block from '../components/Block/Block';
import TopScrollButton from '../components/TopScrollButton/TopScrollButton';
import Card, { Header, Body, Footer, Title, Subtitle, Text, Image, Actions, Overlay } from '../components/Card/Card';
import { SearchOutlined, StarFilled, StarOutlined, PushpinOutlined } from '@ant-design/icons';


const Home = () => {
    return (
        <div className='container mt-5'>
            <h2>Components</h2>

            <TopScrollButton />

            <Block title='Buttons' collapsed={false} className={'my-5'}>
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='sm' icon={SearchOutlined}>Small</Button>
                    <Button color='primary' size='md' icon={SearchOutlined}>Normal</Button>
                    <Button color='primary' size='lg' icon={SearchOutlined}>Large</Button>
                </div>

                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='sm'>Small</Button>
                    <Button color='primary' size='md'>Normal</Button>
                    <Button color='primary' size='lg'>Large</Button>
                </div>

                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary-subtle' size='sm'>Small</Button>
                    <Button color='primary-subtle' size='md'>Normal</Button>
                    <Button color='primary-subtle' size='lg'>Large</Button>
                </div>

                <div className={'flex gap-2 mb-2'}>
                    <Button color='secondary' size='sm'>Small</Button>
                    <Button color='secondary' size='md'>Normal</Button>
                    <Button color='secondary' size='lg'>Large</Button>
                </div>
                
                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='secondary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='transparent' size='md' iconOnly={true} icon={SearchOutlined}></Button>
                    <Button color='primary' size='md' disabled>Normal</Button>
                </div>

                <div className={'flex gap-2 mb-2'}>
                    <Button color='primary' size='lg fl'>Remaining width</Button>
                    <Button color='secondary' size='lg'>Normal</Button>
                </div>

                <Button color='primary' size='lg fw'>Full Width</Button>
            
            </Block>

            <Block title='Cards' collapsed={false} className={'mb-5'}>
                <Grid columns={3} gap={24}>
                    <Card radius={'3px'} >
                        <Image className={'img_default-size scaling-animation'}>
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

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                </Actions>

                            </Header>

                            Card Body

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>

                    <Card radius={'3px'} >
                        <Image className={'img_default-size scaling-animation'}>
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

                                <Actions>
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarFilled />
                                    <StarOutlined />
                                </Actions>

                            </Header>

                            Card Body

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>

                    <Card radius={'3px'} >
                        <Image className={'img_default-size scaling-animation'}>
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
                                src="https://images.unsplash.com/photo-1701003798116-b891466edf27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="test image"
                            />
                        </Image>
                        <Body className={'p-3'}>
                            <Header className={'flex flex-space-between flex-align-center pb-2'}>
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

                            Card Body

                            <Actions className={'flex flex-wrap gap-1 pt-2'}>
                                <Button color={'primary'} size={'md fl'}>Normal</Button>
                                <Button color={'transparent'} size={'md'}>Normal</Button>
                            </Actions>
                        </Body>
                    </Card>
                </Grid>
            </Block>

            <Block title='Empty' collapsed={true} className={'mb-5'}>

            </Block>
        </div>
    );
}

export default Home;