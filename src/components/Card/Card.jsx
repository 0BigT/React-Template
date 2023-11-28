// Card component
// Path: Template/src/components/Card/Card.jsx
import './Card.css';

export default function Card({
    children,
    className,
    radius,
    ...props
}) {

    return (
        <div className={`card ${className || ''}`} {...props} style={{ borderRadius: radius }}>
            {children}
        </div>
    )
}

// CardOverlay component
export function Overlay({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-overlay ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardHeader component
export function Header({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-header ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardBody component
export function Body({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-body ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardFooter component
export function Footer({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-footer ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardTitle component
export function Title({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-title ${className || ''}`} {...props}>
            <h6>
                {children}
            </h6>
        </div>
    )
}

// CardSubtitle component
export function Subtitle({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-subtitle ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardText component
export function Text({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-text ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardImage component
export function Image({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-image ${className || ''}`} {...props}>
            {children}
        </div>
    )
}

// CardActions component
export function Actions({
    children,
    className,
    ...props
}) {
    return (
        <div className={`card-actions ${className || ''}`} {...props}>
            {children}
        </div>
    )
}