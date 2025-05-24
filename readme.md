# 🚚 Strategy Pattern - Cálculo de Frete

Este projeto demonstra a aplicação do padrão de projeto **Strategy** em Node.js, seguindo os princípios de **Clean Code**, **Design Patterns** e **Qualidade de Software**. Ele simula o cálculo de frete com diferentes estratégias e inclui testes unitários com Jest.

---

## 🧠 Conceito Aplicado

### 📐 Padrão de Projeto: Strategy

O **Strategy Pattern** permite definir diferentes algoritmos (estratégias) dentro de classes independentes e torná-los intercambiáveis em tempo de execução. Isso promove:

* **Baixo acoplamento**
* **Alta coesão**
* Princípio do **Aberto/Fechado (OCP)** do SOLID

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Jest (para testes unitários)
* JavaScript (CommonJS)

---

## 📁 Estrutura do Projeto

```
frete-strategy/
│
├── src/
│   ├── strategies/
│   │   ├── FreeShipping.js         # Frete grátis (0%)
│   │   ├── EconomicShipping.js     # Frete econômico (5%)
│   │   └── ExpressShipping.js      # Frete expresso (20%)
│   ├── ShippingContext.js          # Contexto que aplica a estratégia
│   └── index.js                    # Exemplo de uso
│
├── tests/
│   └── ShippingContext.test.js     # Testes unitários com Jest
│
├── package.json
├── jest.config.js
└── README.md
```

---

## 📦 Instalação e Execução

```bash
# Instale as dependências
npm install

# Rode os testes
npm test

# Execute o exemplo na prática
node src/index.js
```

---

## ✅ Testes

Os testes garantem que cada estratégia retorne o valor correto de frete com base no preço fornecido. O Jest valida os seguintes cenários:

* Frete grátis: 0%
* Frete econômico: 5%
* Frete expresso: 20%

