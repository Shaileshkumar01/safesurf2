function detectPhishing(url) {
  const phishingKeywords = ["login", "password", "bank", "paypal"];
  return phishingKeywords.some((keyword) => url.includes(keyword));
}
