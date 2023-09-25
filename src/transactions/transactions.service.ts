import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transactions.model';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction) private transactionRepository: typeof Transaction) {}

  async createTransaction(dto: CreateTransactionDto) {
    const transaction = await this.transactionRepository.create(dto);
    return transaction;
  }

  async getTransactionsByUserId(userId: number) {
    const transactions = await this.transactionRepository.findAll({ where: { userId } });
    return transactions;
  }
}
