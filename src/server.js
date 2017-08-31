import express from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';

import App from './App';

const server = express();
const indexHTML = (body) => `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App</title>
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="/app.js"></script>
      </body>
    </html>
  `;

server.use(express.static(path.resolve(__dirname)));

server.get('/', (req, res) => {
  const body = renderToString(<App />);
  const markup = indexHTML(body);

  res.send(markup);
});

server.listen(3000, error => {
  console.log('server started on port: 3000');
});
