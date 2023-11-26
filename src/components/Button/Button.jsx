/**
 * Button component.
 *
 * @typedef {'primary' | 'primary-subtle' | 'secondary' | 'white' | 'transparent' | 'critical' | 'critical-subtle'} ButtonType
 * @typedef {'sm' | 'md' | 'lg', 'fw', 'sm fw', 'md fw', 'lg fw'} ButtonSize
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {ButtonType} props.color - The color type of the button.
 * @param {ButtonSize} [props.size] - The size of the button.
 * @param {string} [props.icon] - The name of the icon to show.
 * @param {boolean} [props.iconRight] - Whether to show an icon on the right.
 * @param {boolean} [props.iconOnly] - Whether the button contains only an icon.
 * @param {string} [props.to] - The destination URL if the button is a Link.
 * @param {string} [props.className] - Additional class names for styling.
 *
 * @returns {React.ReactNode} The rendered button or link.
 */

import React from 'react';
import './Button.css';

export default function Button({
	children,
	color = 'primary',
	size = 'md',
	icon,
	iconOnly,
	iconRight,
	state,
	...props
}) {
	const buttonProps = {
		className: `${props.className || ''} ${color} ${size || ''} ${iconOnly ? 'icon-only' : ''}`,
		...props,
	};

	const renderIcon = () => {
		if (icon) {
			return React.createElement(icon);
		}
	};

	return (
		<button {...buttonProps}>
			{!iconRight && renderIcon()}
			{children}
			{iconRight && renderIcon()}
		</button>
	)
}
