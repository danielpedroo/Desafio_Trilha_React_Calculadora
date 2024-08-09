
import { Container, Content, Row } from "./styles";
import Input from './Input'
import Button from './Button'
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(' ')

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleClearOne = () => {
    setCurrentNumber((prevNumber) => {
      if (prevNumber.length > 1) {
        return prevNumber.slice(0, -1);
      } else {
        return '0';
      }
    });
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubtractNumber();
          break;
        case '*':
          handleMultipleNumber();
          break;
        case '/':
          handleDivisionNumber();
          break;
        case '%':
          handlePercentageNumber();
          break;
        default:
          break;
      }
    }
  }

  const handleSumNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleSubtractNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleMultipleNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const multiple = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiple));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handleDivisionNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setFirstNumber('0');
      setOperation('');
    }
  }

  const handlePercentageNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const percentage = (Number(firstNumber) / 100) * Number(currentNumber);
      setCurrentNumber(String(percentage));
      setFirstNumber('0');
      setOperation('');
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"C"} onClick={handleOnClear} />
          <Button label={"%"} onClick={handlePercentageNumber} />
          <Button label={"/"} onClick={handleDivisionNumber} />
          <Button label={"x"} onClick={handleMultipleNumber} />
          <Button label={"<"} onClick={handleClearOne} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNumber('7')} />
          <Button label={"8"} onClick={() => handleAddNumber('8')} />
          <Button label={"9"} onClick={() => handleAddNumber('9')} />
          <Button label={"-"} onClick={handleSubtractNumber} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNumber('4')} />
          <Button label={"5"} onClick={() => handleAddNumber('5')} />
          <Button label={"6"} onClick={() => handleAddNumber('6')} />
          <Button label={"+"} onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNumber('1')} />
          <Button label={"2"} onClick={() => handleAddNumber('2')} />
          <Button label={"3"} onClick={() => handleAddNumber('3')} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNumber('0')} />
          <Button label={","} onClick={() => handleAddNumber('.')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
