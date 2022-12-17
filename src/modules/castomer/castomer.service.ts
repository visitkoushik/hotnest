import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/appServices/BaseServices';
import { Customer } from 'src/models/Customer';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomerService extends BaseService<Customer> {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<Customer>,
  ) {
    super(customerModel);
  }
}
