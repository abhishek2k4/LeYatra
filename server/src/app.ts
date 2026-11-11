import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'LeYatra API is running',
    data: {
      service: 'leyatra-api',
      status: 'healthy',
    },
  });
});

export default app;