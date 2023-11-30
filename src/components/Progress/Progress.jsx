// Progressbar component (with props that will describe how full the bar is and the max value)
import './Progress.scss';

export function Progress({
    children,
    className,
    value,
    min = 0,
    max,
    ...props
}) {
    return (
        <div className={`progress ${className || ''}`} {...props}>
            <div className="progress-bar" style={{ width: `${(value / max) * 100}%` }}></div>
        </div>
    )
}

export default Progress;