import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  imagens = {
    'CF-1': 'assets/imagens/CF-1.png',
    'CF-3': 'assets/imagens/CF-3.png',
    'OW': 'assets/imagens/OW.png',
    'Portas Legacy': 'assets/imagens/ELP.png',
    'Porta Pax Dian.': 'assets/imagens/Porta Pax Dian.png',
    'Porta Pax Tras.': 'assets/imagens/Porta Pax Tras.png',
    'Porta Serv. Dian.': 'assets/imagens/Porta Serv Dian.png',
    'Porta Serv.Tras.': 'assets/imagens/Porta Serv Tras.png',
    'Porta Bagag. Diant.E1': 'assets/imagens/Porta Bag Dian E1 e E2.png',
    'Porta Bagag. Tras.E1': 'assets/imagens/Porta Bag Tras E1 e E2.png',
    'Porta Bagag. Diant.E2': 'assets/imagens/Porta Bag Dian E1 e E2.png',
    'Porta Bagag. Tras.E2': 'assets/imagens/Porta Bag Tras E1 e E2.png'
  };
  constructor(private servico: ServicoService) { }

  ngOnInit() {}
}