import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cors from 'cors';
import { RedocOptions, RedocModule } from 'nestjs-redoc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: '*',
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('#오운완')
    .setDescription('오운완 프로젝트입니다.')
    .setVersion('0.1')
    .addTag('TWC - Today Workout Complete!')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('docs', app, document);

  // nestjs-redoc 설정
  // 설정 상세: https://www.npmjs.com/package/nestjs-redoc
  const redocOptions: RedocOptions = {
    title: '#오운완',

    // 필드 알파벳순 정리 사용 안함
    sortPropsAlphabetically: false,

    // swagger.json 다운로드 버튼 가리기
    hideDownloadButton: false,
    hideHostname: false,

    // 필수값 먼저 출력 사용 안함
    requiredPropsFirst: false,

    // 응답 섹션 확장 해두기 여부
    expandResponses: 'all',
  };
  await RedocModule.setup('/docs', app as any, document, redocOptions);
  await app.listen(3000);
}
bootstrap();
