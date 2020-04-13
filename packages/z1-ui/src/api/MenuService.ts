import { Pretend, Headers, Get, Post, Put, Delete, FormData } from 'pretend';
import { Menu } from 'z1-domain';

export class MenuService {

  @Headers('Accept: application/json')
  @Get('/api_temp/menu/menu.json')
  public async getAll(): Promise<Menu[]> { throw -1; }

  @Post('/path')
  public async post(body: any) {throw -1; }

  //@Post('/path')
  //public async post(@FormData('name') blob: any) { }

  @Put('/path')
  public async put() { throw -1;}

  @Delete('/path/:id')
  public async delete(id: string) {throw -1; }

} 