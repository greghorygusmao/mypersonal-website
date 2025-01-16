# My Personal Website

Este repositório contém o código-fonte do meu site pessoal, desenvolvido com foco em desempenho, design moderno e responsividade.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React (ou Remix/Next.js, conforme apropriado)
- **Estilos**: CSS modular ou Tailwind CSS
- **Backend (se aplicável)**: Node.js/Express
- **Outras Ferramentas**: ESLint, Prettier, Docker

## 📂 Estrutura do Projeto

```
mypersonal-website/
├── app/                # Código principal do site
├── public/             # Arquivos estáticos (ícones, imagens, etc.)
├── Dockerfile          # Configuração para Docker
├── package.json        # Dependências e scripts npm
├── README.md           # Documentação do projeto
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Passo a Passo

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/mypersonal-website.git
   cd mypersonal-website
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Inicie a Aplicação Localmente**

   ```bash
   npm run dev
   ```

4. **Acesse o Site**

   Abra seu navegador e acesse:

   ```
   http://localhost:3000
   ```

5. **Construir e Rodar com Docker (opcional)**

   - Para construir a imagem Docker:

     ```bash
     docker build -t mypersonal-website .
     ```

   - Para rodar o container:

     ```bash
     docker run -p 3000:3000 mypersonal-website
     ```

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Envie suas alterações:

   ```bash
   git commit -m "Descrição da minha feature"
   git push origin minha-feature
   ```

4. Abra um pull request no repositório principal.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
