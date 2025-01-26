import React from 'react';
import '../../src/assets/style.css';

function Home() {
  return (
    <div>
      <div className="container text-center d-flex justify-content-center">
        <div className="row gap-3 flex-wrap"> {/* Adiciona flex-wrap para quebrar as colunas */}
          {/* Card 1 */}
          <div className="col text-light border border-1 border-dark-subtle p-3 bg-dark rounded-3 hoverEffect">
            <h3>Multiplataforma</h3>
            <p>
              Desenvolvida com Electron, sua aplicação roda perfeitamente no Windows, macOS e Linux com um único código-fonte. Esqueça a necessidade de desenvolver versões separadas para cada sistema operacional.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col text-light border border-1 border-dark-subtle p-3 bg-dark rounded-3 hoverEffect">
            <h3>Integração com Node.js</h3>
            <p>
              Aproveite todo o poder do Node.js para acessar APIs do sistema operacional, manipular arquivos, criar servidores e utilizar milhares de módulos disponíveis no ecossistema npm.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col text-light border border-1 border-dark-subtle p-3 bg-dark rounded-3 hoverEffect">
            <h3>Interface Moderna e Responsiva</h3>
            <p>
              Crie interfaces incríveis e responsivas utilizando as tecnologias mais populares da web: HTML, CSS e JavaScript. Ofereça uma experiência de usuário fluida e atraente em qualquer dispositivo.
            </p>
          </div>

          {/* Card 4 */}
          <div className="col text-light border border-1 border-dark-subtle p-3 bg-dark rounded-3 hoverEffect">
            <h3>Banco de Dados e Recursos Externos</h3>
            <p>
              Integre facilmente bancos de dados locais ou remotos e adicione novos recursos externos de forma rápida e eficiente. Expanda as funcionalidades da sua aplicação sem complicações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
