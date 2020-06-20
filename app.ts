import server from './src/server'

const port: number = Number(process.env.PORT) || 3000;

server.listen(port, () => console.log(`api listen port ${port}`));
