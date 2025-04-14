import React, { useState, useEffect } from "react";
import "../../../public/main.css";
import Layout from "../../../public/Layout";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/ui/codeBlock";
import TabbedCodeBlock from "@/components/ui/tabbedCodeBlocks";

export default function BuildingASecureAPI() {
  const [code, changeCode] = useState("");
  return (
    <Layout>
      <main className="page-content" aria-label="Content">
        <div className="wrapper">
          <article
            className="post h-entry"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <header className="post-header">
              <h1 className="post-title p-name" itemProp="name headline">
                Building Secure API Authentication in Node.js Without OAuth
              </h1>
              <p>Simple, scalable alternatives to overengineered auth flows.</p>
              <p className="post-meta">
                <time
                  className="dt-published"
                  dateTime="2025-04-07T13:09:39-05:00"
                  itemProp="datePublished"
                >
                  Apr 14, 2025
                </time>
              </p>
            </header>

            <div className="post-content e-content" itemProp="articleBody">
              <h2>Table of Contents</h2>
              <ul>
                <li>Introduction</li>
                <li>Why Not OAuth?</li>
                <li>Authentication Methods Covered</li>
                <li>Project Setup</li>
                <li>Implementing API Key Auth</li>
                <li>Implementing HMAC Signatures</li>
                <li>Implementing JWT Auth</li>
                <li>Security Tips</li>
                <li>When Should You Use OAuth?</li>
                <li>Conclusion</li>
              </ul>

              <h2>1. Introduction</h2>
              <p>
                Not every project needs the complexity of OAuth. In this post,
                I’ll walk you through three powerful, production-ready methods
                to secure your API using plain Node.js and Express.
              </p>

              <h2>2. Why Not OAuth?</h2>
              <p>
                OAuth is great for third-party user authentication, but it’s
                often overkill for:
                <ul>
                  <li>Internal APIs</li>
                  <li>Developer tools</li>
                  <li>Webhooks</li>
                  <li>Monetized services like PayBridge</li>
                </ul>
                It adds unnecessary complexity when you only need secure access.
              </p>

              <h2>3. Authentication Methods Covered</h2>
              <ul>
                <li>
                  <strong>API Keys</strong>: Simple tokens passed in headers,
                  easily rotated and rate-limited.
                </li>
                <li>
                  <strong>HMAC Signatures</strong>: Cryptographically signed
                  requests that ensure data integrity.
                </li>
                <li>
                  <strong>JWT</strong>: Self-contained tokens that hold session
                  state.
                </li>
              </ul>

              <h2>4. Project Setup</h2>
              <CodeBlock
                language="bash"
                code={`mkdir secure-api-auth
cd secure-api-auth
npm init -y
npm install express crypto jsonwebtoken dotenv`}
              />

              <p>
                Create a <code>.env</code> file:
              </p>
              <CodeBlock
                language="env"
                code={`API_KEY=your-secret-key
HMAC_SECRET=super-secret-signing-key
JWT_SECRET=jwt-secret`}
              />

              <h2>5. API Key Authentication (Middleware)</h2>
              <p>
                <strong>Middleware:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`// middleware/apiKeyAuth.js
require('dotenv').config();

module.exports = (req, res, next) => {
  const key = req.header('x-api-key');
  if (!key || key !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};`}
              />

              <p>
                <strong>Usage in Route:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`const express = require('express');
const apiKeyAuth = require('./middleware/apiKeyAuth');

const app = express();
app.get('/secure', apiKeyAuth, (req, res) => {
  res.json({ message: 'Access granted via API Key.' });
});`}
              />

              <h2>6. HMAC Signature Authentication</h2>
              <p>
                <strong>Signing Utility:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`// utils/hmac.js
const crypto = require('crypto');

function generateHMAC(data, secret) {
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

module.exports = generateHMAC;`}
              />

              <p>
                <strong>Middleware to Verify:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`// middleware/hmacAuth.js
const generateHMAC = require('../utils/hmac');
require('dotenv').config();

module.exports = (req, res, next) => {
  const signature = req.header('x-signature');
  const payload = JSON.stringify(req.body); // must be raw body
  const expectedSig = generateHMAC(payload, process.env.HMAC_SECRET);

  if (signature !== expectedSig) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  next();
};`}
              />

              <h2>7. JWT Auth (Token-Based)</h2>
              <p>
                <strong>Signing JWT:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, { expiresIn: '1h' });`}
              />

              <p>
                <strong>Middleware:</strong>
              </p>
              <CodeBlock
                language="javascript"
                code={`// middleware/jwtAuth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Missing token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};`}
              />

              <h2>8. Security Tips</h2>
              <ul>
                <li>Hash secrets in storage.</li>
                <li>Use HTTPS always.</li>
                <li>Rate-limit all endpoints.</li>
                <li>Rotate API keys and JWT secrets regularly.</li>
                <li>Never log raw secrets or tokens.</li>
              </ul>

              <h2>9. When Should You Use OAuth?</h2>
              <ul>
                <li>Third-party app integrations</li>
                <li>Federated identity (SSO)</li>
                <li>Multiple user permission scopes</li>
              </ul>

              <h2>10. Conclusion</h2>
              <p>
                You don’t need OAuth for every API. With API keys, HMAC, and
                JWT, you can build secure, scalable authentication systems
                tailored to your product.
              </p>
            </div>

            <Link
              className="u-url"
              to="/welcome-to-the-blog.html"
              hidden
            ></Link>
          </article>
        </div>
      </main>
    </Layout>
  );
}
