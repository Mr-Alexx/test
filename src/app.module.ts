import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
// import { BrowserService } from './browser.service';
// import { RedisService } from './redis.service';
// import { CacheModule } from '@nestjs/cache-manager';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public')
    // }),
    // CacheModule.registerAsync({
    //   useFactory: () => ({
    //     host: 'localhost',
    //     port: 6379,
    //     db: 0,
    //     password: 'qian!@1120'
    //   }),
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 13307,
    //   username: 'root',
    //   password: 'qian!@1120',
    //   database: 'nest_admin',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: false,
    // }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // BrowserService
  ],
})
export class AppModule {}
