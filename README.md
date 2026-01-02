
```markdown
# GFG Sarthi - Backend 🚀

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![WebSockets](https://img.shields.io/badge/Protocol-WebSocket-blue) ![Data Structure](https://img.shields.io/badge/Algorithm-Trie-orange)

**GFG Sarthi** is the high-performance backend server for the GFG Sarthi Browser Extension. It provides real-time,
low-latency syntax suggestions to users solving coding problems on platforms like GeeksforGeeks and LeetCode.

## 🌟 Key Features

* **Real-Time Communication:** Uses **WebSockets** for persistent, bi-directional communication with the browser extension.
* **Optimized Search:** Implements a custom **Trie (Prefix Tree)** data structure to perform O(L) prefix lookups, ensuring instant
feedback regardless of dictionary size.
* **Multi-Language Support:** Curated keyword datasets for **C++, Java, and Python**.
* **Scalable Architecture:**
    * **V1.1.0 Upgrade:** Moved search logic from frontend to backend to reduce client memory usage and network payload size.
    * **In-Memory Caching:** Loads keyword datasets into RAM at startup for zero-latency queries.
* **Production Ready:** Configured for cloud deployment (Render/Heroku) with dynamic port binding and health checks.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Library:** `ws` (Lightweight WebSocket implementation)
* **Protocol:** WebSocket (`ws://` / `wss://`)
* **Algorithms:** Trie (Prefix Tree), DFS (Depth First Search)

---

## 📂 Project Structure

```text
├── data/                  # Keyword datasets
│   ├── cpp.js             # C++ Keywords (STL, primitives)
│   ├── java.js            # Java Keywords (Collections, lang)
│   └── python.js          # Python Keywords (libs, built-ins)
├── utils/
│   └── trie.js            # Optimized Trie Class implementation
├── server.js              # Main entry point (HTTP + WebSocket)
├── package.json           # Dependencies
└── .gitignore             # Ignored files (node_modules, .env)

```

---

## 🚀 Installation & Setup

### Prerequisites

* Node.js (v14 or higher)
* npm

### 1. Clone the Repository

### 2. Install Dependencies

```bash
npm install

```

### 3. Run Locally

```bash
# Starts server on port 8080 (or process.env.PORT)
node server.js

```

*You should see: `Initialization Complete. Server Ready. Server is listening on port 8080*`

---

## 📡 API / WebSocket Protocol

The server listens for JSON messages and responds with an array of suggestions.

**Endpoint:** `ws://localhost:8080` (Local) or `wss://codehelper-backend.onrender.com` (Production)

### Request Format (Client -> Server)

```json
{
  "word": "uno",
  "language": "cpp"
}

```

### Response Format (Server -> Client)

```json
["unordered_map", "unordered_multiset", "unordered_set"]

```

---

## 🧠 algorithmic Optimization (V1.1.0)

In version 1.0.0, the frontend filtered arrays using `.filter()`, which is .
In **Version 1.1.0**, we migrated to a Backend **Trie** structure.

| Feature | V1.0 (Array Filter) | V1.1 (Trie Search) |
| --- | --- | --- |
| **Complexity** |  (N = dictionary size) |  (L = word length) |
| **Payload Size** | Heavy (Sends full dictionary) | Light (Sends query only) |
| **Scalability** | Poor (lags with large datasets) | Excellent (Constant time) |

---

## ☁️ Deployment (Render)

1. Push code to GitHub (ensure `node_modules` is in `.gitignore`).
2. Create a new **Web Service** on Render.
3. Connect your repository.
4. **Build Command:** `npm install`
5. **Start Command:** `node server.js`
6. Render will automatically inject the `PORT` variable.

---

## 📜 License

MIT License. Free to use for educational purposes.

---
