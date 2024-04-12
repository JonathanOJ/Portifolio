import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyService {
  constructor() {}

  getJobsInfo() {
    return [
      {
        title: 'Desenvolvedor Full-Stack',
        company: 'LeadFinder SmartCRM',
        description:
          ' Como desenvolvedor full-stack na LeadFinder eu adquiri muita experiência' +
          'com desenvolvimento Web utilizando Angular, Java. Além disso, eu obtive' +
          "muita experiência com a utilização de API's Rest e no gerenciamento de" +
          'banco de dados utilizando PostGres, assim como nas demais ferramentas' +
          'que o Angular e o Java proporcionam o que me tornou um desenvolvedor' +
          'mais completo e preparado para os desafios do mercado.',
        date: 'Março 2023 - Atual',
      },
      {
        title: 'Suporte ao Cliente - Trainee',
        company: 'CISS S.A',
        description:
          'Como analista de suporte ao cliente na CISS S.A eu adquiri muita' +
          'experiência com atendimento ao cliente, resolução de problemas e aprendi' +
          'muito sobre o sistema de gestão para o varejo da CISS. Além disso, eu' +
          'obtive muita experiência com a utilização de WinSQL para a realização de' +
          'consultas em banco de dados SQL Server, o que me proporcionou um' +
          'aprendizado enorme perante gerenciamento de dados.',
        date: 'Setembro 2022 - Março 2023',
      },
    ];
  }
}
