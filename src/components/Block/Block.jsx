// Block with a title and content area underneath that can be toggled open and closed.

import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import { Collapse } from '../Collapse/Collapse';
// big empty icon
import { CaretRightOutlined, CaretDownOutlined, FolderOpenOutlined } from '@ant-design/icons';

import './Block.css';

export function CollapseBlock({
    title,
    children,
    className,
    collapsed = true,
    ...props
}) {
    const [isOpen, setIsOpen] = React.useState(!collapsed);

    // if no children, show empty icon
    if (!children) {
        children = (
            <div className='block-placeholder flex flex-column flex-align-center flex-justify-center py-5'>
                <div className='block-placeholder-icon'>
                    <FolderOpenOutlined />
                </div>

                <h6>Empty</h6>
            </div>
        )
    }
    
    return (
        <div className={`block ${className || ''}`} {...props}>
            <div className='block-header'>
                {/* flex */}
                <div className='flex flex-align-center gap-1'>
                    <h6>{title}</h6>

                    <Button
                        color='transparent'
                        size='md'
                        icon={isOpen ? CaretDownOutlined : CaretRightOutlined}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? 'Collapse' : 'Expand'}
                    </Button>
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div className='block-content'>
                    {children}
                </div>
            </Collapse>

            {/* block-footer */}
            <div className='block-footer'>

            </div>
        </div>
    )
}

CollapseBlock.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}

CollapseBlock.defaultProps = {
    title: '',
    children: null,
    className: '',
}

export default CollapseBlock;