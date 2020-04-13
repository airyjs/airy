import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { AiryLogger } from '../logger/logger';

import type { GrpcOptions } from '@nestjs/microservices';
import type { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';

export class Airy {
  private readonly options: NestApplicationContextOptions & GrpcOptions;

  constructor(grpcOptions: GrpcOptions) {
    this.options = {
      logger: new AiryLogger(),
      transport: Transport.GRPC,
      ...grpcOptions,
    };
  }

  public createMicroservice(microserviceModule: any) {
    return NestFactory.createMicroservice<GrpcOptions>(microserviceModule, this.options);
  }
}
