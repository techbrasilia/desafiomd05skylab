Desafio 5: Primeiro projeto com ReactJS - completo

Sobre o desafio
Nesse desafio você adicionará novas funcionalidades na aplicação que desenvolvemos ao longo desse módulo.

Funcionalidades
1. Captando erros
Adicione um try/catch por volta do código presente na função handleSubmit presente no componente Main e caso um repositório não seja encontrado na API do Github adicione uma borda vermelha por volta do input em que o usuário digitou o nome do repositório.

2. Repositório duplicado
Antes de fazer a chamada à API na função handleSubmit faça uma verificação para ver se o repositório não está duplicado, ou seja, se ele ainda não existe no estado de repositories.

Caso exista, dispare um erro, e com isso o código cairá no catch do try/catch criado na funcionalidade anterior.

throw new Error('Repositório duplicado');
3. Filtro de estado
Adicione um filtro de estado na listagem de Issues que criamos no detalhe do repositório. O estado representa se a issue está em aberto, fechada ou uma opção para exibir todas.

Exemplos de requisição:

https://api.github.com/repos/rocketseat/unform/issues?state=all
https://api.github.com/repos/rocketseat/unform/issues?state=open
https://api.github.com/repos/rocketseat/unform/issues?state=closed
Você pode encontrar a documentação nesse link;

4. Paginação
Adicione paginação nas issues listadas no detalhe do repositório. A API do Github lista no máximo 30 issues por página e você pode controlar o número da página atual por um parâmetro no endereço da requisição:

https://api.github.com/repos/rocketseat/unform/issues?page=2
Adicione apenas um botão de próxima página e página anterior. O botão de página anterior deve ficar desativado na primeira página.

📅 Entrega
Esse desafio não precisa ser entregue e não receberá correção, mas você pode ver o resultado do código do desafio aqui. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

##################################################################################################################


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
