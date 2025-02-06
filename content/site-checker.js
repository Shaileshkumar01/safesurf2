if (window.location.protocol === "http:") {
    const warning = document.createElement("div");
    warning.classList.add("warning-banner");
    warning.textContent = "Warning: This website is not secure (HTTP).";
    document.body.prepend(warning);
}
