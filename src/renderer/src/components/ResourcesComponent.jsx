import React from 'react';

function ResourcesComponent() {
  return (
    <div id='ResourcesComponent'> {/* Fundo escuro e texto branco */}
    {/* Header */}
    <h2 className='text-center display-3'>Recursos adicionados</h2>
    {/* Conteúdo da lista */}
      <div className="list-group text-white p-3 mx-3">
        <a href="#" className="list-group-item list-group-item-action bg-dark text-white border-secondary" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Simples de montar!</h5>
            <small>Novo!</small>
          </div>
          <p className="mb-1">Todos os recursos nativos do Electron-vite estão incluídos</p>
          <small>Manipulação de componentes, usando JSX; recursos base do React; recursos base do Node;</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-dark text-white border-secondary">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Fácil de personalizar!</h5>
            <small>Novo!</small>
          </div>
          <p className="mb-1">Adicione seus próprios componentes e estilos.</p>
          <small>Use CSS, Tailwind, ou qualquer biblioteca de UI que preferir.</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action bg-dark text-white border-secondary">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Pronto para produção!</h5>
            <small>Novo!</small>
          </div>
          <p className="mb-1">Gere executáveis para Windows, macOS e Linux.</p>
          <small>Integração com Electron Builder para distribuição.</small>
        </a>
      </div>
    </div>
  );
}

export default ResourcesComponent;
