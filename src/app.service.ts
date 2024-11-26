import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NovaFila } from './interface/nova-fila';

@Injectable()
export class AppService {
  constructor(private readonly prismaService:PrismaService){}

  getHello(): string {
    return 'Hello World!';
  }

  async adicionarNaFila(novaFila:NovaFila){
    novaFila.fila_status = 1;
    return await this.prismaService.fila.create({
      data:novaFila
    })
  }

  
}
