## Exemplo de uso de navegação por Stack

[Documentação oficial](https://reactnavigation.org/docs/getting-started)

### Usando o Stack

[Saiba mais sobre Stack Navigator](https://reactnavigation.org/docs/stack-navigator)

### Instalação

#### Navigation

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
```


# Organização do Projeto

Para organizar o projeto, criei a pasta `src` para conter todo o código-fonte. Dentro dela, criei uma subpasta chamada `screens`, onde coloquei os componentes que representam as telas. Além disso, na pasta `src/routes`, criei o arquivo `stack.routes.jsx`.

No arquivo `stack.routes.jsx`, primeiramente importei o `createStackNavigator` da biblioteca `@react-navigation/stack`, junto com as telas que criei. Fiz a desestruturação do `createStackNavigator`, extraindo apenas os componentes `Screen` e `Navigator`. Em seguida, criei uma função que retorna o componente `Navigator`, que envolve as `Screens`, onde cada uma mapeia uma rota diferente para os respectivos componentes.

Ainda na pasta `routes`, criei o arquivo `index.jsx`, onde importei o `NavigationContainer` de `@react-navigation/native` e a função principal do `stack.routes.jsx`. Nesse arquivo, criei uma função chamada `Routes`, que no seu retorno envolve o `StackNavigator` da função `stack.routes` dentro de um `NavigationContainer`. Por fim, importei a função `Routes` no `App.js` e a chamei no retorno da função principal do app.

No arquivo `stack.routes.jsx`, dentro do `Navigator`, adicionei duas telas: `Home` e `Gallery`. Como a tela `Home` foi declarada primeiro, ela será a primeira a ser renderizada na aplicação.

Para fazer a navegação entre as telas, na `HomeScreen`, fiz a desestruturação do parâmetro `navigation` dentro da função principal da tela, já que ela é filha de um `Navigator`, permitindo o uso do `navigation.navigate`. Em seguida, criei um botão na tela e, no evento `onPress`, chamei uma função que usa o `navigation.navigate`, passando o nome da tela de destino (definida no `stack.routes.jsx`). Assim, ao clicar no botão, a navegação entre as telas é realizada.
