# Configurando o ambiente

1. Criar o projeto
   `npx create-react-app #NOMEPROJETO`

2. Elminar arquivos desnecessarios

3. Configurar EsLint e Prettier
   3.1 Abrir as configurações do VsCode e acrescentar as linhas

```json
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
```

3.2. Adicionar eslint como dependencia de desenvolvimento

`yarn add eslint -D`

3.3 Iniciar o eslint

` yarn eslint --init`

    3.3.1 Escolher a opção "To Check syntax, find problems, and enforce code style"

    3.3.2 Escolher a opção "JavaScript"

    3.3.3 Escolher a opção "Reacte"

    3.3.4 Escolher "No"

    3.3.5 Escolher "Browser"

    3.3.6 Escolher "Use a popular style Guide"

    3.3.7 Escolher "Airbnb"

    3.3.8 Escolher "JSON"

    3.3.9 Escolher "YES"

3.4 Executar o seguinte comando

`rm package-lock.json && yarn`

3.5 Instalar o prettier

`yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D`

3.6 Alterar o arquivo.eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "jsx-quotes": ["error", "prefer-single"]
  }
}
```

3.7 Criar o arquivo .prettierrc.json

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true
}
```
