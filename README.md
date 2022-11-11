# Wizard UI

Uma interface web genérica para a configuração inicial (contratação) de qualquer coisa.

# Tecnologias

- [Node.js](https://nodejs.org/) v16.x
- [Next.js](https://nextjs.org/)
- [chakra](https://chakra-ui.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

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
    state valid_token <<choice>>
    [*] --> valid_token
        valid_token --> acess_denied: token inválido
        valid_token --> welcome: token válido
    state have_contract <<choice>>
    welcome --> have_contract: contrato
        have_contract --> contract_details: contract_id
        have_contract --> contract_form: não tenho
    contract_form --> contract_details: envio OK
    contract_details --> end_contract_form: cancelar contrato
    end_contract_form --> inactive_contract_detail: envio OK
    welcome --> inactive_contracts: contratos encerrados
    inactive_contracts --> inactive_contract_detail: inactive_contract_id
    inactive_contract_detail --> [*]
    state contract_form {
        [*] --> step_1
        step_1 --> ...
        ... --> step_n
        step_n --> [*]
    }
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

