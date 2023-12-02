// Card component
// Path: Template/src/components/Card/Card.jsx
import './Card.scss';

export default function Card({
    children,
    className,
    radius = 0,
    type = 'default',
    link,
    scalingAnimation = false,
    ...props
}) {

    return (
        <div
            className={`card card-type-${type} ${className || ''}`}
            {...props}
            style={{ borderRadius: radius }}
        >
            {link ? (
                // Link with children inside
                <a href={link} className={`card-link ${scalingAnimation ? 'scaling-animation' : ''}`}>
                    {children}
                </a>
            ) : (
                // Children inside
                <>{children}</>
            )}
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

// CardParagraph component
export function Paragraph({
    children,
    className,
    cutOff,
    cutOffLength,
    ...props
}) {
    return (
        <div className={`card-paragraph ${className || ''}`} {...props}>
            {cutOff ? (
                // Cut off text at a cutOffLength
                <p>
                    {children.length > cutOffLength
                        ? children.substring(0, cutOffLength || 100) + '...'
                        : children}
                </p>
            ) : (
                // Full text
                <p>{children}</p>
            )}
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
        <h6 className={`card-title ${className || ''}`} {...props}>
            {children}
        </h6>
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
    objectPosition,
    radius = 0,
    ...props
}) {
    return (
        <div className={`card-image ${className || ''} ${objectPosition ? `object-position-${objectPosition}` : ''}`} style={{ borderRadius: radius }} {...props}>
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