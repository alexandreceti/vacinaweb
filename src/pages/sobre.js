import React from 'react';

function Sobre(props) {
  return (
    <div className='content'>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            <i className="fa-solid fa-syringe"></i> Aplicação de Portfólio
          </p>
          <p className="subtitle">
            Informações do site do Estado da data de 18/04/2022
          </p>
        </div>
      </section>
      <section className='content'>
      <br />
      <p>
      Esta app, contém dados abertos do site https://coronavirus.saude.mg.gov.br/dadosabertos. 
Informo que mesmo estão sendo manipulados para demonstrar apenas conhecimento no desenvolvimento de aplicação web.
Para Informações sobre os dados favor acessar o site do estado, citado acima.</p>
    <h3 className='title is-3'>DADOS ABERTOS</h3>
    <p>
    A Secretaria de Estado de Saúde disponibiliza, além das informações presentes nos painéis interativos, arquivos em formato XLSX e CSV para download, dando transparência à situação enfrentada nesta pandemia. Desde o dia 02/06/2021, estão sendo disponibilizados seis arquivos relacionados a casos de COVID-19 em formato CSV:
    </p>

    <h3 className='title is-3'>Distribuição de Vacinas</h3>

    <p>
Informações extraídas do Sistema SIES-MG com as doses enviadas pelo Ministério da Saúde, encaminhadas as Unidades Regionais de Saúde e das Unidades Regionais de Saúde aos municípios mineiros. Sujeito a alterações. Atualizado diariamente em formato XSLX no site e semanalmente em formato aberto não proprietário nesta página.
      </p>
      <br />
      <a href="https://coronavirus.saude.mg.gov.br/dadosabertos" target="_blank" rel="noopener noreferrer">https://coronavirus.saude.mg.gov.br/dadosabertos</a>

      </section>
    </div>
  );
}

export default Sobre;