import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { ResUsers } from 'src/Module-User/res-users/entities/res-users.entity';

export const ApprovedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as ResUsers;
  },
);
