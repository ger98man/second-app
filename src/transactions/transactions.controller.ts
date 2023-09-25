import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@UseGuards(AuthGuard)
@Controller('/api/transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Post()
  create(@Body() dto: CreateTransactionDto) {
    return this.transactionService.createTransaction(dto);
  }

  @Get('/:userId')
  getByValue(@Param('userId') userId: number) {
    return this.transactionService.getTransactionsByUserId(userId);
  }
}
