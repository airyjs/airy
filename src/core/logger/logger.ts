import { Logger } from '@nestjs/common';

export class AiryLogger extends Logger {
  error(message: string, trace: string) {
    super.error(message, trace);
  }
}
