import './Widget.scss';

// widget component
export function Widget({
    children,
    className,
    ...props
}) {
    return (
        <div className={`widget ${className || ''}`} {...props}>
            {children}
        </div>
    )
}