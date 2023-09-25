import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  readonly userId: number;
  @ApiProperty()
  readonly value: number;
  @ApiProperty()
  readonly type: string;
}
