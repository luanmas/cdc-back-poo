import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';

interface PaginationOptions<T> extends FindManyOptions<T> {
  where?: object;
  relations?: string[];
}

@Injectable()
export class PaginationService {
  async paginate<T>(
    repository: Repository<T>,
    page: number = 1,
    limit: number = 10,
    options: PaginationOptions<T> = {},
  ): Promise<any> {
    const { where, relations } = options;

    const [results, total] = await repository.findAndCount({
      where,
      relations,
      skip: (page - 1) * limit,
      take: limit,
    });

    const lastPage = Math.ceil(total / limit);

    return {
      first: 1,
      prev: page > 1 ? page - 1 : null,
      next: page < lastPage ? page + 1 : null,
      last: lastPage,
      pages: lastPage,
      items: total,
      data: results,
    };
  }
}
