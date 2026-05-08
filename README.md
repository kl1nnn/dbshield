# DBShield

Protótipo de uma plataforma para monitoramento de segurança em bancos de dados.

Site: https://kl1nnn.github.io/dbshield

O projeto apresenta uma página institucional e um painel interno com indicadores de tentativas de invasão, nível de risco, parâmetros do banco monitorado e uma explicação simples do fluxo de detecção.

## Funcionalidades

- Landing page com apresentação do produto, planos e formulário de contato.
- Dashboard com registros simulados de ataques e tentativas bloqueadas.
- Visualização de métricas por tipo de ameaça e por dia da semana.
- Aba com parâmetros do ambiente monitorado.
- Seção explicando como o motor de análise identifica comportamentos suspeitos.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Recharts
- Framer Motion

## Como executar

Instale as dependências:

```sh
npm install
```

Rode o ambiente de desenvolvimento:

```sh
npm run dev
```

Gere a versão de produção:

```sh
npm run build
```

Execute os testes:

```sh
npm test
```

## Observações

Os dados exibidos no dashboard são fictícios e servem apenas para demonstrar a interface. O projeto não se conecta a bancos reais nem realiza bloqueio de tráfego.
