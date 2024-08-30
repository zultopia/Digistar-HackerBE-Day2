// const http = require('http');

// function logRequest(req) {
//     const now = new Date().toISOString();
//     console.log(`[${now}] ${req.method} ${req.url}`);
// }

// const server = http.createServer((req, res) => {
//     logRequest(req);

//     if (req.url === '/') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Hello, Digistar!</h2>');
//     } else if (req.url === '/info') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/plain');
//         res.end(`HTTP Version: ${req.httpVersion}\nMethod: ${req.method}\nURL: ${req.url}`);
//     } else if (req.url === '/about') {
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Hello, Ini Halaman About Digistar!</h2>');
//     } else if (req.url === '/submit') {
//         if (req.method === 'POST') {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end('<h2>Data submitted successfully!</h2>');
//         } else if (req.method === 'GET') {
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end('<h2>This is the submit page, but you need to POST data.</h2>');
//         }
//     }  else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<h2>Page Not Found</h2>');
//     }
// });

// server.listen(3000, () => {
//     console.log('Server running at http://127.0.0.1:3000/');
// });

const http = require('http');

// Middleware 
const logRequest = (req) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url}`);
};

const server = http.createServer((req, res) => {
    logRequest(req); 

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #B5E5F9, #FFFFFF);
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        font-size: 3em;
                        color: #004AAD;
                        text-shadow: 0 0 10px rgba(0, 74, 173, 0.8), 0 0 20px rgba(0, 74, 173, 0.6);
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <h2>Hello, Digistar!</h2>
            </body>
            </html>
        `);
    } else if (req.url === '/info') {
        res.statusCode = 200;
        res.end(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #B5E5F9, #FFFFFF);
                        font-family: Arial, sans-serif;
                    }
                    pre {
                        font-size: 1.2em;
                        color: #004AAD;
                        text-shadow: 0 0 10px rgba(0, 74, 173, 0.8), 0 0 20px rgba(0, 74, 173, 0.6);
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <pre>HTTP Version: ${req.httpVersion}\nMethod: ${req.method}\nURL: ${req.url}</pre>
            </body>
            </html>
        `);
    } else if (req.url === '/submit' && req.method === 'POST') {
        res.statusCode = 200;
        res.end(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #B5E5F9, #FFFFFF);
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        font-size: 2.5em;
                        color: #004AAD;
                        text-shadow: 0 0 10px rgba(0, 74, 173, 0.8), 0 0 20px rgba(0, 74, 173, 0.6);
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <h2>Data submitted successfully!</h2>
            </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #B5E5F9, #FFFFFF);
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        font-size: 2.5em;
                        color: #004AAD;
                        text-shadow: 0 0 10px rgba(0, 74, 173, 0.8), 0 0 20px rgba(0, 74, 173, 0.6);
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <h2>Hello, Ini Halaman About Digistar!</h2>
            </body>
            </html>
        `);
    } else {
        res.statusCode = 404;
        res.end(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(135deg, #B5E5F9, #FFFFFF);
                        font-family: Arial, sans-serif;
                    }
                    h2 {
                        font-size: 3em;
                        color: #FF4D4D;
                        text-shadow: 0 0 10px rgba(255, 77, 77, 0.8), 0 0 20px rgba(255, 77, 77, 0.6);
                        animation: fadeIn 2s ease-in-out;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
            </head>
            <body>
                <h2>Page Not Found</h2>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});