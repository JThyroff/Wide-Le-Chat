const attachStyleRule = (css) => {
    // Create a style element
    const style = document.createElement('style');
    style.type = 'text/css';

    // Check if the style element can be used with textContent
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    // Append the style element to the head of the document
    document.head.appendChild(style);
};

// This function will be executed when the page loads
const adjustMaxWidth = () => {
    console.debug('Le-Chat.adjustMaxWidth() called');

    // Define the CSS rule to override max-width for .max-w-screen-md within a @layer utilities block
    const css = `
        @layer utilities {
            .max-w-\\(--breakpoint-md\\) {
                max-width: 100% !important;
            }
        }
    `;
    attachStyleRule(css);
};

// Call the function to apply the style rule
adjustMaxWidth();
