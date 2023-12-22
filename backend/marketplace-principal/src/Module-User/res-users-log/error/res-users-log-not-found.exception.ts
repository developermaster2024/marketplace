import { NotFoundException } from '@nestjs/common';

export class ResUsersLogNotFoundException extends NotFoundException {
  constructor() {
    super('Res Users Log no encontrado');
  }
}
