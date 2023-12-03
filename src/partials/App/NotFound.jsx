import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons';
import Card, { Header, Paragraph } from 'components/Card/Card';
import Button from 'components/Button/Button';

export default function NotFound() {
    return (
        <div className='flex flex-justify-center flex-align-center w-100 vh-100'>
            <Card className={'opaque animate__fadeInDown'}>
                <Header className={'flex flex-justify-center flex-align-center gap-2'}>
                    <h1>404</h1>
                    <h4>Page not found</h4>
                </Header>
                <Paragraph className='py-2'>
                    The page you are looking for does not exist. <br />
                    It might have been moved or deleted.
                </Paragraph>
                <Link to={'/'}><Button type={'primary'} icon={ArrowLeftOutlined}>Go back</Button></Link>
            </Card>
        </div>

    )
}