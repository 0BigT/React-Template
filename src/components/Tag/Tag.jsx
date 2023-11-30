// Tag component
import './Tag.scss';

export function Tag({
    children,
    className,
    contentTitle,
    maxTitleLength,
    ...props
}) {
    return (
        // if contentTitle is set, add it to the tag
        { contentTitle } &&
        <div className={`tag gap-1 flex flex-row flex-align-center ${className || ''}`} {...props}>
            <span className={`tag-content`} {...props}>
                {children}
            </span>

            <span className="tag-description">{contentTitle.length > maxTitleLength ? `${contentTitle.substring(0, maxTitleLength)}...` : contentTitle}</span>
        </div>
        ||
        <span className={`tag tag-content ${className || ''}`} {...props}>
            {children}
        </span>
    )
}

export default Tag;