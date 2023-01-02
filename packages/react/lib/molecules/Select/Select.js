import React, { useState, useRef, useEffect, createRef } from 'react';
import Text from '../../atoms/Text/Text.js';

const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === 0) {
        return options.length - 1;
    }
    return currentIndex - 1;
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null) {
        return 0;
    }
    if (currentIndex === options.length - 1) {
        return 0;
    }
    return currentIndex + 1;
};
const Select = ({ options = [], label = 'Please select an option ...', onOptionSelected: handler, renderOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const labelRef = useRef(null);
    const [optionRefs, setOptionRefs] = useState([]);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        // Calculate the height of button, default to 0 when not available.
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    const highlightOption = (optionIndex) => {
        setHighlightedIndex(optionIndex);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if (['Enter', 'Space', 'ArrowDown'].includes(event.code)) {
            setIsOpen(true);
            // set focus on the list item
            highlightOption(0);
        }
    };
    useEffect(() => {
        setOptionRefs(options.map(_ => createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
    const onOptionKeyDown = (event) => {
        if (event.code === 'Esc') {
            setIsOpen(false);
            return;
        }
        if (event.code === 'ArrowDown') {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        }
        if (event.code === 'ArrowUp') {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }
        if (event.code === 'Enter') {
            onOptionSelected(options[highlightedIndex], highlightedIndex);
        }
    };
    return (React.createElement("div", { className: 'dse-select' },
        React.createElement("button", { "data-testid": 'DseSelectButton', onKeyDown: onButtonKeyDown, "aria-controls": 'dse-select-list', "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, ref: labelRef, className: 'dse-select__label', onClick: () => onLabelClick() },
            React.createElement(Text, null, selectedOption === null ? label : selectedOption.label),
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`, width: '1rem', height: '1rem', fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        (React.createElement("ul", { role: 'menu', "aria-hidden": isOpen ? undefined : false, id: 'dse-select-list', style: { top: overlayTop }, className: `dse-select-overlay ${isOpen ? 'dse-select-overlay--open' : ''}` }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            const isHighlighted = highlightedIndex === optionIndex;
            const ref = optionRefs[optionIndex];
            const renderOptionProps = {
                ref,
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => {
                    return {
                        ref,
                        role: 'menuitemradio',
                        'aria-label': option.label,
                        'aria-checked': isSelected ? true : undefined,
                        onKeyDown: onOptionKeyDown,
                        tabIndex: isHighlighted ? -1 : 0,
                        onMouseEnter: () => highlightOption(optionIndex),
                        onMouseLeave: () => highlightOption(null),
                        className: `dse-select__option
                                ${isSelected ? 'dse-select__option--selected' : ''}
                                ${isHighlighted ? 'dse-select__option--highlighted' : ''}
                            `,
                        key: option.value,
                        onClick: () => onOptionSelected(option, optionIndex),
                        ...overrideProps
                    };
                }
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected ? (React.createElement("svg", { width: '1rem', height: '1rem', fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                    React.createElement("path", { d: "M5 13l4 4L19 7" }))) : null);
        })))));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
