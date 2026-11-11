import 'dotenv/config';
import app from './app';

const PORT = Number(process.env.PORT) || 5000;

const server = app.listen(PORT, () => {
  console.log(`LeYatra API running on port ${PORT}`);
});

const shutdown = (signal: string) => {
  console.log(`${signal} received. Shutting down...`);

  server.close(() => {
    console.log('LeYatra API stopped.');
    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));