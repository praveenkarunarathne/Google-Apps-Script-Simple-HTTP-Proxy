function doGet(e) {
  const url = e.parameter["url"];
  const response = UrlFetchApp.fetch(url);
  const content = response.getContentText();
  return ContentService
    .createTextOutput(content)
    .setMimeType(ContentService.MimeType.TEXT);
}
