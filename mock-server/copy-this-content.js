import jsonServer from 'vite-plugin-simple-json-server';

jsonServer({ delay: 500, mockDir: 'mock-server' });

// copy these to the vite.config to mock a server