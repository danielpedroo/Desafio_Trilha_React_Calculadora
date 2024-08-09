
## Autores
- [@danielpedroo](https://www.github.com/danielpedroo) 
- [@pablohdev](https://github.com/pablohdev)


# Calculadora - React.Js

Fala Devs :>, este é um projeto oferecido pela Digital Innovation One (DIO) que consiste no desenvolvimento de uma calculadora na web ou melhor, uma calculadora em REACT >D. Portanto, deixo aqui em algumas dicas e avisos ok.

## Stack utilizada

**Front-end:** React

## Instalação - Ferramentas

- VS Code (https://code.visualstudio.com/)

- Node.Js (https://nodejs.org/pt)

- Npm (https://www.npmjs.com/) Ou pelo terminal do Vs Code:

```bash
  npm install 
```

Obs: Faça instalação dos plugins do Vs Code descritos neste desafio, pois eles ajudaram muito em seu desenvolvimento. 

- **Prettier - Code formatter**
- **Color Highlight**
- **Color Picker**
- **Bracket Pair Color DLW**
- **EditorConfig for VS Code**
- **ES7 React/Redux/GraphQL/React-Native snippets**
- **Todo Tree**
- **Turbo Console Log**

## Verificação - Ferramentas ||
Execute no terminal do Vs Code ou no terminal do windows (cmd) os seguintes comandos

```
node -v  
```
```
npm - v
```

- Estes comandos verificaram se a instalação foi bem sucedida. retornando a versão do M}Node e NPM.

## Instalação - React + Pacotes NPM

Escolha a pasta onde será feito a instalação do react, ou seja, apos escolha a pasta raiz e digite este comando para criação do react: 

```bash
    npx create-react-app my-app (my-app <-- Nome do seu projeto)
    cd my-app
    npm start <-- Comando para iniciar seu projeto na web.
```

Apos a escolha da pasta raiz onde sera feito o desenvolvimento, ou seja a instalação do react, instale os pacotes e faça as devidas atualizações:

**Este comando instala as dependências e verifica se algum pacote esta excluso.**
```
npm update
```

**Este comando instala o pacote de componentes estilizados.** 
```
npm add style-components
```



## Melhorias

Fala pessoal ja estamos chegando no final ok :D, muito bem, o projeto orginal difere com o meu, portanto adcionei algumas mudanças apenas no **codigo**.

- **Botão apagar um caracter**
- **Automatização no modo da calculadora**




## Uso/Exemplos

**Implementação do limpar apenas um digito.**
```javascript
                    //Seu projeto
import Component from 'my-project'

const handleClearOne = () => {
    setCurrentNumber((prevNumber) => {

//Se a contagem de numeros digitados na calculadora for maior que 1.
      if (prevNumber.length > 1) {

//Desde o zero, (padrão inicial) ao -1 retire estes carateres.
        return prevNumber.slice(0, -1);

      } else {

//Caso não tiver nada retorne apenas '0'.
        return '0';
      }
    });
  };

```

**Esta Implementação fornece uma flexibilidade maior a conta.**

```javascript
                    //Seu projeto
import Component from 'my-project'

const handleSumNumber = () => {

//Se primeiro Numero for igual a '0'.
    if (firstNumber === '0') {

//O valor de currentNumber lhe sera atribuido.
      setFirstNumber(String(currentNumber));

//E currentNumber será instânciado como '0'.
      setCurrentNumber('0');

//É chamado o método de setOperation() que consiste em definir 
//qual operação esta sendo feita, no nosso caso é a soma.
      setOperation('+');

    } else {

/*Quando é feito a soma o useState re-enderiza e passa o valor como descrito para o setCurrentNumber que atribui este valor ao currentNumber.

setCurrentNumber(String(sum));

Portanto, o usuário quando vai fazer uma nova soma por exemplo: 10 + 10 = 20, 
se o firstNumber não receber '0' como valor, ele ficara com o valor digitado na primeira utilização. Contudo se eu digitei 10, este valor foi lhe atribuido e será dele até que seje trocado por outro valor, ou seja, se eu chamar o valor soma novamente e digitar algum numero ele somará o valor 10 que lhe foi atribuido.

Agora se for feito o seu "reset" para '0', quando for chamado a função de soma e digitado algum novo valor, o valor de 20 será "guardado", que no caso é o resultado da conta anterior, portanto:

setFirstNumber('0');

  10 + 10 = 20 
  20 + 10 = 30
  30 / 2  = 15;

Assim aumentando a flexibilidade da calculadora.
*/

      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }
```

