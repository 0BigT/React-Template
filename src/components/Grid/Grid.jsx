import React, { Children } from 'react';
import './Grid.scss';

/**
 * Add columns
 *
 * @export default
 * @param {number | string} columns The number of columns to display.
 * @param {number | string} rows The number of rows to display.
 * @param {string} id [optional] The id used for the `key` & `id` attributes.
 * @param {string | number} gap [optional] Change the gap between columns from default.
 *  Can use `css variables`, `number string as pixels` and `other valid css strings` (use space to specify both `row-gap column-gap`) .
 * @param {string} [customColTemplate=''] [optional] Set a custom `grid-template-columns`. default = equal width.
 * @param {string} [customRowTemplate=''] [optional] Set a custom `grid-template-rows`.
 * @param {string} [className=''] [optional] Extra class names applied to the div if needed.
 * @param {JSX.Element} children
 * @param {string} [overflow=''] [optional] Set the overflow of the grid. default = unset.
 * @return {JSX.Element}
 */
export default function Grid({ title, columns, rows, id, gap, customColTemplate, customRowTemplate, className, children, overflow }) {
    // Format gap value if set
    if (gap && ['string', 'number'].includes(typeof gap)) {
        let formattedGap = '';
        for (const gapSingle of `${gap}`.split(/\s/, 2)) {
            // Add px to gapSingle if it's a number
            if (/\d$/.test(gapSingle)) {
                formattedGap += `${gapSingle}px `;
            }
            // Change gapSingle to variable if it starts with "--"
            else if (/^--/.test(gapSingle)) {
                formattedGap += `var(${gapSingle}) `;
            } else {
                formattedGap += `${gapSingle} `;
            }
        }
        gap = formattedGap;
    }
    else {
        gap = undefined;
    }

    // customColTemplate
    if (customColTemplate) {
        customColTemplate = customColTemplate.replace(/(\d+)(fr)/g, '$1fr');
    }

    // If overflow is set make the grid scrollable
    if (overflow) {
        return (
            <>
                {title && <h6 className='py-3 text-normal'>{title}</h6>}

                <div {...{
                    key: id,
                    id: id,
                    className: `grid-flex-container grid-overflow ${className ? className : ''}`,
                    style: { gap, '--columns': overflow, '--gap': gap }
                }}>
                    {children}
                </div>
            </>
        );
    }

    return (
        <>
            {title && <h6 className='py-3 text-normal'>{title}</h6>}

            <div {...{
                key: id,
                id: id,
                className: `grid ${columns ? `columns-${columns}` : ''} ${rows ? `rows-${rows}` : ''} ${className ? className : ''}`,
                style: { gap, gridTemplateColumns: customColTemplate, gridTemplateRows: customRowTemplate }

            }}>
                {children}
            </div>
        </>
    );
}