# Google Apps Script Simple HTTP Proxy

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=googleappsscript&logoColor=white)](https://developers.google.com/apps-script)

A lightweight and simple HTTP proxy built on Google Apps Script. This tool allows you to bypass CORS restrictions or fetch content from external URLs directly through a Google Apps Script Web App.

## Features
- **Simple & Lightweight**: Minimal setup required.
- **CORS Bypass**: Fetch resources that would otherwise be blocked by CORS policies.
- **Google Infrastructure**: Runs entirely on Google's reliable serverless infrastructure.

## How it Works
The script exposes a `doGet` endpoint that accepts a `url` parameter. It fetches the content of the provided URL using `UrlFetchApp` and returns it as text.

**Endpoint Structure:**
```
https://script.google.com/macros/s/YOUR_WEBAPP_ID/exec?url=TARGET_URL
```

## Setup

1.  **Create a Project**:
    - Go to [Google Apps Script](https://script.google.com/home).
    - Click on **New Project**.

2.  **Add Code**:
    - Copy the code from `Code.gs` in this repository.
    - Paste it into the `Code.gs` file in your new Google Apps Script project.

3.  **Deploy**:
    - Click on **Deploy** > **New deployment**.
    - Select **Web app** as the deployment type.
    - Set **Execute as** to "Me".
    - Set **Who has access** to "Anyone" (or "Anyone with Google account" depending on your needs).
    - Click **Deploy**.

4.  **Get URL**:
    - Copy the **Web App URL** provided after deployment.

## Usage

To use the proxy, simply append the target URL to your Web App URL as a query parameter:

```
https://script.google.com/macros/s/YOUR_WEBAPP_ID/exec?url=https://example.com
```

### Example
If you want to fetch the content of `https://example.com` and your Web App ID is `AKfycbx...`, the URL would be:

```
https://script.google.com/macros/s/AKfycbx.../exec?url=https://example.com
```

## Disclaimer
This tool is intended for educational and legitimate development purposes. Please ensure you comply with the Terms of Service of both Google Apps Script and the target websites you are accessing. Do not use this proxy for malicious activities.

## License
This project is licensed under the [GNU General Public License v3.0](LICENSE).
