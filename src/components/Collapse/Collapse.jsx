// // Collapse component
import PropTypes from 'prop-types';

export function Collapse({
    isOpen,
    children,
    className,
    ...props
}) {
    return (
        <div className={`collapse ${className || ''}`} {...props} style={{ display: isOpen ? 'block' : 'none' }}>
            {children}
        </div>
    )
}

Collapse.propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
}

Collapse.defaultProps = {
    isOpen: true,
    children: null,
    className: '',
}

export default Collapse;