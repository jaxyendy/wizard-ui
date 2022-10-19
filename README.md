# Wizard UI

Uma interface web genérica para a configuração inicial (contratação) de qualquer coisa.

# Tecnologias

- [Node.js](https://nodejs.org/) v16.x
- [Next.js](https://nextjs.org/)

# Development server

```
# install
yarn
# launch dev server on localhost:3000
yarn dev
```

# Contribuições

Este repositório pode estar espelhado em outros lugares, para contribuir com melhorias ou relatar
problemas, utilize a página deste projeto no Github: https://github.com/jaxyendy/wizard-ui

Se você está lendo este README fora do Github, não deixe de ler também o
arquivo [DISTRO.md](DISTRO.md).

# Licença

A definir.
<small>(gostamos muito da AGPL3, mas MIT pode ser mais flexível)</small>


## Fluxos

### Telas da UI

```mermaid
stateDiagram-v2
    [*] --> acesso_negado: token inválido
    [*] --> lista_de_contratos: token válido
    lista_de_contratos --> detalhes_do_contrato: id
    lista_de_contratos --> formulario: novo contrato
    state formulario {
      [*] --> tela_1
      tela_1 --> ...
      ... --> tela_n
      tela_n --> [*]
    }
    formulario --> formulario: erro
    formulario --> detalhes_do_contrato: submissão OK
    detalhes_do_contrato --> detalhes_do_contrato: consulta status
    detalhes_do_contrato --> lista_de_contratos: voltar
```

### Wizard API

[Wizard API](https://github.com/jaxyendy/wizard-api) é o Backend (BFF) deste projeto, abaixo alguns
fluxos que envolvem comunicação entre este projeto e seu backend.

#### Contratação

```mermaid
sequenceDiagram
    Wizard UI->>Wizard API: Dados de formulário
    alt dados inválidos
        Wizard API-->>Wizard UI: Erro
    end
    Wizard API->>Wizard UI: Resposta
```

#### Consulta

```mermaid
sequenceDiagram
    Wizard UI->>Wizard API: Consulta Status
    Wizard API->>Wizard UI: Status conhecido (cache)
    Wizard API->>Wizard UI: Último status
```

