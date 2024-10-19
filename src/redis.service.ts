import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class RedisService implements OnModuleInit {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  

  onModuleInit() {
    console.log('redis')
    this.addData()
  }
  
  async addData () {
    await this.cacheManager.set('ffffdjkdf', Math.random() * 1000)
  }
}