# Google Apps Script Simple HTTP Proxy

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge&logo=googleappsscript&logoColor=white)](https://developers.google.com/apps-script)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

A lightweight and robust HTTP proxy solution built on Google Apps Script. This tool enables developers to bypass CORS restrictions and fetch content from external URLs directly through a secure Google Apps Script Web App.

---

## 📑 Table of Contents
- [Features](#-features)
- [How it Works](#-how-it-works)
- [Prerequisites](#-prerequisites)
- [Setup & Installation](#-setup--installation)
- [Usage](#-usage)
- [Limitations](#-limitations)
- [Disclaimer](#-disclaimer)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **🚀 Simple & Lightweight**: Minimal configuration required to get started.
- **🔓 CORS Bypass**: Seamlessly fetch resources that are typically blocked by Cross-Origin Resource Sharing (CORS) policies.
- **☁️ Serverless Infrastructure**: leverages Google's reliable and scalable serverless architecture.
- **🔒 Secure**: Runs within your own Google account context.

## 🛠 How it Works

The script exposes a `doGet` endpoint that accepts a `url` query parameter. It utilizes the `UrlFetchApp` service to retrieve the content of the specified URL and returns it as a text response with the appropriate MIME type.

**Endpoint Structure:**
```http
https://script.google.com/macros/s/YOUR_WEBAPP_ID/exec?url=TARGET_URL
```

## 📋 Prerequisites

Before you begin, ensure you have the following:
*   A **Google Account** to access Google Apps Script.
*   Basic understanding of how to deploy a Google Apps Script Web App.

## ⚙️ Setup & Installation

Follow these steps to deploy your own proxy instance:

### 1. Create a New Project
1.  Navigate to [Google Apps Script](https://script.google.com/home).
2.  Click on the **New Project** button.

### 2. Add the Code
1.  Open the `Code.gs` file in the online editor.
2.  Copy the entire content from the [`Code.gs`](Code.gs) file in this repository.
3.  Paste it into the editor, replacing any existing code.

### 3. Deploy the Web App
1.  Click on **Deploy** > **New deployment** in the top-right corner.
2.  Click the query icon (gear) next to "Select type" and choose **Web app**.
3.  **Description**: (Optional) Enter a description like "HTTP Proxy".
4.  **Execute as**: Select **"Me"** (this is crucial for permissions).
5.  **Who has access**: 
    *   Select **"Anyone"** if you want it publicly enabling (use with caution).
    *   Select **"Anyone with Google account"** for slightly restricted access.
    *   Select **"Only myself"** for private testing.
6.  Click **Deploy**.

### 4. Get Your Endpoint
1.  Once deployed, copy the **Web App URL** provided.
2.  It will look like: `https://script.google.com/macros/s/.../exec`

## 🚀 Usage

To use the proxy, append the target URL you wish to fetch as a `url` query parameter to your Web App URL.

### Syntax
```bash
https://script.google.com/macros/s/YOUR_WEBAPP_ID/exec?url=TARGET_URL
```

### Example
Fetching content from `https://example.com` with a Web App ID of `AKfycbx...`:

```http
https://script.google.com/macros/s/AKfycbx.../exec?url=https://example.com
```

You can use this URL in your frontend JavaScript code (e.g., in a `fetch` request) to retrieve data without CORS errors.

## ⚠️ Limitations

Please be aware of the following limitations imposed by Google Apps Script:

*   **Quotas**: `UrlFetchApp` has daily quotas and limitations (e.g., 20,000 calls/day for consumer accounts). See [Google Services Quotas](https://developers.google.com/apps-script/guides/services/quotas) for details.
*   **Execution Time**: Scripts have a maximum execution time limit (usually 6 minutes).
*   **Payload Size**: There are limits on the size of the request and response payloads.
*   **Redirects**: The proxy handles redirects automatically, but complex auth flows might require modifications.

## ⚖️ Disclaimer

This tool is intended for **educational and legitimate development purposes only**. 
*   Ensure you comply with the **Terms of Service** of both Google Apps Script and the target websites you are accessing.
*   **Do not** use this proxy for malicious activities, scraping protected data, or bypassing intended access controls.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/improvement`).
3.  Commit your changes (`git commit -m 'Add some improvement'`).
4.  Push to the branch (`git push origin feature/improvement`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](LICENSE) file for details.
