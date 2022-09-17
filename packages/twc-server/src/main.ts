import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedocOptions, RedocModule } from 'nestjs-redoc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('#ㅇㅇㅇ')
    .setDescription('오운완 프로젝트입니다.')
    .setVersion('0.1')
    .addTag('ㅇㅇㅇ')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document);

  // nestjs-redoc 설정
  // 설정 상세: https://www.npmjs.com/package/nestjs-redoc
  const redocOptions: RedocOptions = {
    title: '#ㅇㅇㅇ',

    sortPropsAlphabetically: false,

    hideDownloadButton: false,
    hideHostname: false,

    requiredPropsFirst: false,

    expandResponses: 'all',
  };
  await RedocModule.setup('/docs', app, document, redocOptions);

  await app.listen(3000);
}
bootstrap();
