async function checkDataBreach(email) {
    const response = await fetch(`https://api.haveibeenpwned.com/unifiedsearch/${email}`);
    return response.ok ? "Your data has been leaked!" : "No leaks found.";
}
