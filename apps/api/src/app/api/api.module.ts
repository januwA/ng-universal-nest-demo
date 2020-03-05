import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../../../../demo/src/main.server';
@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/demo/browser')
    })
  ],
  controllers: [ApiController],
  providers: []
})
export class ApiModule {}
