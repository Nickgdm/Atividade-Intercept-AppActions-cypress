<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║                                 CYPRESS AVANÇADO: INTERCEPT E APP ACTIONS                               ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
Projeto de estudo para praticar recursos de automação de interface com Cypress, com foco na interceptação de requisições de rede e na interação com a aplicação por meio de App Actions.

## Sobre o projeto

A atividade explora técnicas que ajudam a tornar os testes de interface mais previsíveis, sincronizando a execução com chamadas de rede relevantes e organizando as interações com a aplicação.

## Objetivos

- Praticar a interceptação e a inspeção de chamadas de rede.
- Organizar interações com a aplicação para tornar os testes mais previsíveis.
- Validar comportamentos da interface relacionados às respostas da aplicação.

## Tecnologias e ferramentas

- JavaScript
- Node.js e npm
- Cypress

## Pré-requisitos

- Node.js e npm instalados.
- Aplicação-alvo disponível conforme a configuração do projeto.
- Dependências instaladas.

## Instalação e execução

Instale as dependências:

```bash
npm install
```

Abra a interface do Cypress:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

Consulte `package.json`, `cypress.config.js` e os arquivos em `cypress/` para conferir os scripts, as URLs e os cenários implementados.

Se `cypress.env.json` contiver credenciais ou tokens reais, não os publique. Utilize valores locais e mantenha segredos fora do versionamento.

## Estrutura do projeto

```text
Atividade-Intercept-AppActions-cypress/
├── cypress/
├── cypress.config.js
├── cypress.env.json
├── package.json
├── package-lock.json
└── README.md
```

## Desafios práticos

- Coordenar os testes com chamadas de rede.
- Aguardar respostas relevantes antes de validar o comportamento.
- Manter a automação legível e menos dependente de esperas arbitrárias.

## Boas práticas

- Utilizar interceptação para sincronizar o teste com chamadas de rede.
- Separar configurações e especificações.
- Padronizar a execução pelo Cypress.
- Remover segredos antes de compartilhar o projeto publicamente.

## Aprendizados

A atividade permite praticar técnicas de Cypress, como interceptar requisições e estruturar ações de aplicação para criar testes de interface mais previsíveis e fáceis de manter.

## Considerações finais

A lista exata de cenários depende dos arquivos de teste presentes no repositório. Revise as configurações de ambiente e confirme que nenhum segredo está incluído antes de compartilhar o projeto.
<pre>
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║       Atividade desenvolvida durante a formação profissionalizante em Quality Assurance (QA) pela       ║
║                     EBAC — Escola Britânica de Artes Criativas e Tecnologia                             ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════╝
</pre>
