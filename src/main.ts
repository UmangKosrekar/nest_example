import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './utils/response.interceptor';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.LOCAL_PORT ?? 3000;

  // middlewares
  app.use(morgan('dev'));
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(port, () => {
    console.log(`Server start @ ${port}`);
  });
}
bootstrap();
