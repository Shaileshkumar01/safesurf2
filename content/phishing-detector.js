if (window.location.href.includes("phishing")) {
    const warning = document.createElement("div");
    warning.classList.add("warning-banner");
    warning.textContent = "Warning: This website may be a phishing attempt.";
    document.body.prepend(warning);
}
