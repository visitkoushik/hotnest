import { Injectable } from '@nestjs/common';

import { Category } from 'src/models/Category';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/services/BaseServices';
import { Branch } from 'src/models/Branch';
import { AppResponse } from 'src/models/AppResponse';

@Injectable()
export class BranchService extends BaseService<Branch> {
  constructor(
    @InjectModel(Branch.name)
    private readonly chainModel: Model<Branch>,
  ) {
    super(chainModel);
  }

  async findByBranchCode(
    id: string,
    select?: any,
  ): Promise<AppResponse<Branch>> {
    try {
      const filter_stage = {
        code: {
          $eq: id,
        },
      };
      const queryObject = this.chainModel.findOne(filter_stage).select(select);
      const record: any = await queryObject.exec();

      if (record != null) {
        return new AppResponse(1, record, null);
      } else {
        return new AppResponse(0, null, 'Record Not Found');
      }
    } catch (e) {
      return new AppResponse(0, null, e.message);
    }
  }
}
