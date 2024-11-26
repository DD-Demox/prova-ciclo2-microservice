import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NovaFila } from './interface/nova-fila';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('ola')
  getHello(@Payload() texto:string) {
    this.logger.log(texto)
  }

  @EventPattern('adicionar-fila')
  adicionarFila(@Payload() novaFila:NovaFila){
    this.logger.log(JSON.stringify(novaFila))
    return this.appService.adicionarNaFila(novaFila)
  }
}
