import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

class Calculator extends Component {

    state = {
        displayValue: '0',
        number1: null, 
        number2: null
    }

    clearMemory = () => {
        this.setState({displayValue: 0})
   
    }

    setOperation = (operation) => {
        if (operation == "+"){
            let result = this.state.number1 + this.state.number2
            this.setState({displayValue: result})
            console.log(result)
            return result
        } else if (operation == "-"){
            let result = this.state.number1 - this.state.number2
            this.setState({displayValue: result})
            console.log(result)
        } else if (operation == "*"){
            let result = this.state.number1 * this.state.number2
            this.setState({displayValue: result})
            console.log(result)
        } else if (operation == "/"){
            let result = this.state.number1 / this.state.number2
            this.setState({displayValue: result})
            console.log(result)
        }

        if (operation == "="){
            let result = this.setState({displayValue : result})
             console.log(result)
         }


        
    }

    addDigit = (digit) => {
        /*if (this.state.number1 != null){
            this.setState({number1: parseInt(digit)})
        }

        if (this.state.number2 != null){
            this.setState({number2: parseInt(digit)})
        }*/
        let valor = this.state.displayValue + digit
        this.setState({displayValue: parseInt(valor)})
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator