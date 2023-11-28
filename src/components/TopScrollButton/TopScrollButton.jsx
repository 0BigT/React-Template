// Top scroll button component
import PropTypes from 'prop-types';
import { ArrowUpOutlined } from '@ant-design/icons';
import Button from '../Button/Button';
import React from 'react';

import './TopScrollButton.css';

export function TopScrollButton({
    className,
    ...props
}) {
    const [show, setShow] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }


    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Button
            className={`top-scroll-button ${show ? 'slide-in-from-bottom' : 'slide-out-to-bottom'} ${className || ''}`}
            color='primary-subtle'
            size='lg'
            icon={ArrowUpOutlined}
            iconOnly={true}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }) }
            {...props}
        />
    )
}

TopScrollButton.propTypes = {
    className: PropTypes.string,
}

TopScrollButton.defaultProps = {
    className: '',
}

export default TopScrollButton;