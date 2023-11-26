import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'

describe('jest', ()=>{
    
    /*it('should display elements', ()=>{
        render(<App atual={100}/>)
        const value = screen.getByTestId('atualConsumo').textContent
        console.log(value)

        expect(value).toEqual('100')
    })*/
    /*it('should increment 50 when click at increment button', ()=>{
        render(<App atual={100}/>)
        const buttonIncrement = screen.getByRole('button',{name:'Aumentar consumo!'})
        expect(buttonIncrement).toBeEnabled()
        fireEvent.click(buttonIncrement)
        expect(screen.getByTestId('atualConsumo').textContent).toEqual('150')
    })*/
    it('should to show a message when click on decrement button', ()=>{
        render(<App atual={0}/>)
        const buttonIncrement = screen.getByRole('button',{name:'Diminuir consumo!'})
        expect(buttonIncrement).toBeEnabled()
        fireEvent.click(buttonIncrement)
        expect(screen.getByTestId('atualConsumo').textContent).toEqual('Contagem abaixo de zero!')
    })
})