/**
 * Utility functions for Secure Student Browsing extension.
 */

/**
 * Checks if a given URL is using a secure connection (HTTPS).
 * @param {string} url - The URL to check.
 * @returns {boolean} - True if HTTPS, false otherwise.
 */
function isSecureURL(url) {
    return url.startsWith("https://");
}

/**
 * Displays a browser notification.
 * @param {string} title - The title of the notification.
 * @param {string} message - The message to display.
 */
function showNotification(title, message) {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "../assets/icons/icon48.png",
        title: title,
        message: message
    });
}

/**
 * Sanitizes input to prevent cross-site scripting (XSS).
 * @param {string} input - The user input to sanitize.
 * @returns {string} - The sanitized input.
 */
function sanitizeInput(input) {
    return input.replace(/[<>"'&]/g, (char) => ({
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
    }[char]));
}

/**
 * Logs messages only in development mode.
 * @param {string} message - The message to log.
 */
function devLog(message) {
    if (chrome.runtime.getManifest().version.includes("dev")) {
        console.log(`[Secure Student Browsing] ${message}`);
    }
}

// Exporting functions for use in other scripts
export { isSecureURL, showNotification, sanitizeInput, devLog };
