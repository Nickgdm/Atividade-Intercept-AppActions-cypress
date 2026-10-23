# Cypress Avançado — Intercept e App Actions

Projeto prático para exercitar recursos avançados de automação de interface com Cypress, com foco em interceptação de requisições de rede e interação com a aplicação por meio de App Actions.

## Objetivos
- Praticar interceptação e inspeção de chamadas de rede.
- Organizar interações com a aplicação para tornar os testes mais previsíveis.
- Validar comportamentos da interface relacionados a respostas da aplicação.

## Tecnologias
- JavaScript
- Node.js e npm
- Cypress

## Pré-requisitos
- Node.js e npm.
- Aplicação alvo disponível conforme a configuração do projeto.
- Dependências instaladas.

## Instalação e execução
```bash
npm install
npx cypress open
```
Para executar todos os testes em modo headless:
```bash
npx cypress run
```
Consulte `package.json`, `cypress.config.js` e os arquivos em `cypress/` para conferir scripts, URLs e cenários. Se o arquivo `cypress.env.json` contiver credenciais ou tokens reais, não os publique; use valores locais e mantenha o arquivo fora do versionamento.

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
Coordenar testes com chamadas de rede, aguardar respostas relevantes e manter a automação legível e menos dependente de esperas arbitrárias.

## Boas práticas adotadas
- Uso de interceptação para sincronizar o teste com chamadas de rede.
- Separação entre configurações e especificações.
- Execução padronizada pelo Cypress.

## 📚 Aprendizados
A atividade permite praticar técnicas avançadas de Cypress, como interceptar requisições e estruturar ações de aplicação para criar testes de interface mais previsíveis e fáceis de manter.

## Considerações finais
A lista exata de cenários depende dos arquivos de teste presentes no repositório. Revise configurações de ambiente e remova segredos antes de compartilhar o projeto publicamente.

---

## 🎓 Formação
Atividade desenvolvida durante a formação profissionalizante em **Quality Assurance (QA) pela EBAC — Escola Britânica de Artes Criativas e Tecnologia**.