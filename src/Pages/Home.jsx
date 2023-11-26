// import button
import Button from '../components/Button/Button';
import { SearchOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div>
            <h1>Components</h1>

            <Button color='primary' size='sm'>Small</Button>
            <Button color='primary' size='md'>Normal</Button>
            <Button color='primary' size='lg'>Large</Button>
            <br />
            <br />
            <Button color='secondary' size='sm'>Small</Button>
            <Button color='secondary' size='md'>Normal</Button>
            <Button color='secondary' size='lg'>Large</Button>
            <br />
            <br />
            <Button color='primary' size='sm' icon={SearchOutlined}>Small</Button>
            <Button color='primary' size='md' icon={SearchOutlined}>Normal</Button>
            <Button color='primary' size='lg' icon={SearchOutlined}>Large</Button>
            <br />
            <br />
            <Button color='primary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
            <Button color='secondary' size='md' iconOnly={true} icon={SearchOutlined}></Button>
            <Button color='transparent' size='md' iconOnly={true} icon={SearchOutlined}></Button>
            <br />
            <br />
            <Button color='primary' size='md' disabled>Normal</Button>
            <Button color='primary-subtle' size='md'>Normal</Button>
            <br />
            <br />
            <Button color='primary' size='lg fw' icon={SearchOutlined}>Normal</Button>
        </div>
    );
}

export default Home;