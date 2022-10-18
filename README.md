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

## Fluxos

### Telas da UI

```mermaid
stateDiagram-v2
    [*] --> acesso_negado: token inválido
    [*] --> lista_de_contratos: token válido
    lista_de_contratos --> detalhes_do_contrato: id
    lista_de_contratos --> formulario: novo contrato
    formulario --> formulario: erro
    formulario --> detalhes_do_contrato: sucesso
    detalhes_do_contrato --> detalhes_do_contrato: consulta status
    detalhes_do_contrato --> lista_de_contratos: voltar
```

### Wizard API

[Wizard API](https://github.com/jaxyendy/wizard-ui) é o Backend (BFF) deste projeto, abaixo alguns
fluxos que envolvem comunicação entre este projeto e seu backend.

Esta API é "stateless" e por sua vez conversa com um outro serviço (Persistent state) para
armazenar o log das requisições e respostas ao serviço (Creation service) que de fato cria a "coisa" 
contratada.

#### Contratação

```mermaid
sequenceDiagram
    Wizard UI->>Wizard API: Dados de formulário
    alt dados inválidos
        Wizard API-->>Wizard UI: Erro
    end
    par
        Wizard API->>Persistent state: Registra a requisição
    and
        Wizard API->>Creation service: Requisição
    end
    Creation service->>Wizard API: Resposta
    par
        Wizard API->>Wizard UI: Resposta
        Wizard API->>Persistent state: Registra a resposta
    end
```

#### Consulta

```mermaid
sequenceDiagram
    Wizard UI->>Wizard API: Consulta Status
    par
        Wizard API->>Persistent state: Consulta status conhecido
        Persistent state->>Wizard API: Status conhecido
        Wizard API->>Wizard UI: Status conhecido
    and
        Wizard API->>Creation service: Consulta último status
        Creation service->>Wizard API: Último Status
    end
    par
        Wizard API->>Wizard UI: Último status
    and
        Wizard API->>Persistent state: Atualiza status conhecido
    end
```

