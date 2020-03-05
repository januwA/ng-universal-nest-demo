import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../../../demo/src/main.server';

@Module({
  imports: [
    ApiModule,
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/demo/browser')
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
