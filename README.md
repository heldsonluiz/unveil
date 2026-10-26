# Unveil

Veja suas conexões do Instagram com mais clareza.

O **Unveil** transforma o ZIP oficial de dados da Meta em uma visão organizada de quem segue você, quem você segue e quais relações são recíprocas. O processamento acontece no navegador, sem solicitar login ou senha do Instagram e sem enviar o conteúdo importado para um servidor.

## Recursos

- **Dashboard:** contagens de seguidores, seguindo, conexões mútuas e relações unilaterais.
- **Listas de conexões:** veja quem não segue você de volta e quem você não segue de volta.
- **Solicitações pendentes:** consulte solicitações enviadas e recebidas, quando fornecidas na exportação.
- **Busca e ordenação:** encontre perfis pelo nome de usuário e ordene por nome ou pela data disponível no arquivo.
- **Tabelas paginadas:** numeração dos registros, indicação de reciprocidade e links para os perfis.
- **Importação com revisão:** confira o resumo, os arquivos encontrados e os avisos antes de salvar.
- **Dados locais:** retome a importação após recarregar a página e apague os dados quando quiser.

## Como usar

1. Obtenha o ZIP oficial de dados da sua conta pelo Instagram, escolhendo o formato **JSON** e incluindo os dados de seguidores e seguindo.
2. Abra o Unveil e selecione **Importação**.
3. Selecione ou arraste o ZIP e revise o resumo do processamento.
4. Confirme a importação e explore o dashboard e as listas.

O Unveil mantém **apenas a importação atual**. Ao importar outro arquivo, você precisa confirmar a substituição. Cancelamentos e falhas na gravação preservam os dados anteriores.

## Privacidade e dados locais

- O ZIP é lido e processado no navegador.
- A tag do Google Analytics `G-EB2C44HDPW` mede acessos às páginas. A integração não adiciona eventos com conteúdo do ZIP ou dados do IndexedDB.
- Os dados normalizados são armazenados no IndexedDB do navegador utilizado.
- A aplicação não solicita nem armazena senha, cookie ou token do Instagram.
- Não há sincronização entre dispositivos, armazenamento remoto dos dados importados ou atualização automática da conta.
- A ação **Apagar dados locais**, no rodapé, remove a importação salva após a confirmação com `APAGAR`. O ZIP original permanece no seu dispositivo.

Limpar os dados do site no navegador também pode remover a importação salva.

## Apoie o projeto

O Unveil é open source e pode ser usado gratuitamente. Se o projeto foi útil
para você e quiser contribuir com qualquer valor, envie um Pix para a chave
aleatória:

```text
89ea2a34-fcba-4b8b-b267-af8341ff4827
```

A aplicação também exibe essa chave no rodapé e oferece um botão para copiá-la.

## Como interpretar os resultados

As listas refletem os dados presentes no ZIP, não o estado atual da conta em tempo real.

**“Não seguem de volta”** identifica os nomes presentes em seguindo e ausentes em seguidores naquela exportação. Isso não confirma se uma conta ainda existe nem explica por que um perfil está indisponível.

Um ZIP já baixado não muda quando uma conta é excluída, suspensa, desativada ou troca de nome. O Unveil não verifica a disponibilidade dos perfis e não executa ações como seguir, deixar de seguir ou cancelar solicitações.

Outras limitações:

- Dados não fornecidos pelo Instagram são sinalizados como ausentes, sem serem tratados como uma lista vazia.
- As datas exibidas vêm do arquivo da Meta; seu significado não é inferido pela aplicação.
- Arquivos inválidos ou parcialmente processados geram avisos para revisão.
- Histórico e comparação entre importações estão adiados. Consulte o [roadmap](ROADMAP.md) para acompanhar o escopo.

## Bugs e sugestões

Abra uma [issue no GitHub](https://github.com/heldsonluiz/unveil/issues/new) e
descreva o comportamento encontrado, os passos para reproduzi-lo e o navegador
utilizado. Não publique seu ZIP nem nomes de usuário ou outros dados pessoais.

## Executar localmente

Com Node.js 20.19+, 22.13+ ou 24+ e pnpm instalados:

```bash
git clone git@github.com:heldsonluiz/unveil.git
cd unveil
pnpm install --frozen-lockfile --strict-peer-dependencies
pnpm dev
```

Acesse [localhost:3000](http://localhost:3000).

Para executar a versão de produção:

```bash
pnpm build
pnpm start
```

## Validação e testes

```bash
# Lint, TypeScript, testes unitários/componentes e build
pnpm validate

# Instalar o Chromium utilizado nos testes de navegador
pnpm exec playwright install chromium

# Testes de ponta a ponta
pnpm test:e2e
```

Em Linux, caso faltem bibliotecas do navegador, execute `pnpm exec playwright install-deps chromium`. A instalação das dependências do sistema pode solicitar privilégios de administrador.

Os testes E2E geram o build e iniciam a aplicação na porta `3100`. As fixtures usam perfis fictícios; exportações reais não devem ser adicionadas ao repositório.

## ESLint

O projeto usa ESLint 10 com configuração flat. O plugin oficial
`@next/eslint-plugin-next` mantém as regras Core Web Vitals na mesma versão do
Next.js. React, hooks, TypeScript, imports e acessibilidade usam plugins que
declaram suporte ao ESLint 10. `eslint-config-next` foi removido porque seus
plugins transitivos de React, imports e acessibilidade ainda limitam os peers ao
ESLint 9. As regras equivalentes estão explícitas em `eslint.config.mjs`; essa
configuração não replica integralmente todas as regras do antigo preset.

Instale com `pnpm install --frozen-lockfile --strict-peer-dependencies` para
rejeitar conflitos de peers. Não use `--force` ou `--legacy-peer-deps`.

## Paleta de cores

O tema usa apenas preto e cinzas neutros nos fundos, cards, menus, campos e
estados de hover das superfícies. Verde musgo identifica ações principais,
links e indicadores de foco. Avisos mantêm suas cores nos textos e bordas,
com fundos neutros. Os tokens ficam em `src/app/globals.css`.

| Uso                            | Cor       |
| ------------------------------ | --------- |
| Fundo                          | `#141414` |
| Cards                          | `#202020` |
| Menus e superfícies discretas  | `#282828` |
| Superfícies secundárias        | `#303030` |
| Hover e seleção de superfícies | `#333333` |
| Navegação                      | `#101010` |
| Texto principal                | `#eeeeee` |
| Texto secundário               | `#b5b5b5` |
| Ações principais e links       | `#a0ba46` |
| Hover das ações principais     | `#b3cc5c` |
| Foco de teclado                | `#cce881` |
| Erros e ações destrutivas      | `#e48a96` |
| Bordas                         | `#484848` |

## Movimento

Motion anima entradas de 460 ms, deslocamento de 24 px e escala de 98% a 100% na página inicial,
nos cards do dashboard e nas etapas de seleção, processamento e revisão da
importação. Cards entram em sequência com intervalos de 65–90 ms. As tabelas não
recebem animações de linhas ou de paginação.

`MotionProvider` carrega `domAnimation` sob demanda. `Reveal` mantém o conteúdo
visível no HTML inicial, inclusive sem JavaScript. A preferência por movimento
reduzido elimina as entradas, os deslocamentos ao pressionar e as transições CSS.
Botões e links usam respostas de 160 ms em CSS; botões sobem 2 px no hover em
dispositivos com ponteiro, com retorno ao pressionar.

## Tecnologias

- Next.js com App Router, React e TypeScript
- Tailwind CSS e shadcn/ui
- Zod para validação dos arquivos importados
- JSZip para leitura do ZIP no navegador
- IndexedDB com `idb` para persistência local
- Vitest e React Testing Library para testes unitários e de componentes
- Playwright para testes de ponta a ponta

## Documentação do projeto

- [Roadmap](ROADMAP.md): etapas, entregas e próximos incrementos.
- [Diretrizes do projeto](AGENTS.md): requisitos, decisões de escopo e orientações de desenvolvimento.

No dashboard, o card sob o cursor cresce 4%; os demais diminuem 4%, sem
desfoque e sem alterar o grid. Esse efeito é restrito a ponteiros precisos com
hover e fica desativado com movimento reduzido.
