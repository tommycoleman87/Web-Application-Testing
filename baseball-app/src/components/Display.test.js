import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from '../components/Dashboard';

describe('<Display />', () => {
    it('should render the balls and strikes for the at-bat player', () => {
        const atBat = render(<Dashboard />);
        expect(atBat);
    })

    it('should render strikes no less than zero', () => {
        const atBat = render(<Dashboard />);
        const value = parseInt(atBat.getByTestId('strikes').innerHTML)
        const valueConditional = (num) => {
            return num >= 0;
        }
        
        expect(valueConditional(value)).toBe(true)
    })

    it('should render strikes no greater than two', () => {
        const atBat = render(<Dashboard />);
        const value = parseInt(atBat.getByTestId('strikes').innerHTML)
        const valueConditional = (num) => {
            return num <= 2;
        }
        
        expect(valueConditional(value)).toBe(true)
    })

    it('should render balls no greater than 3', () => {
        const atBat = render(<Dashboard />);
        const value = parseInt(atBat.getByTestId('balls').innerHTML)
        const valueConditional = (num) => {
            return num <= 3;
        }
        
        expect(valueConditional(value)).toBe(true)
    })

    it('should render balls no less than 0', () => {
        const atBat = render(<Dashboard />);
        const value = parseInt(atBat.getByTestId('balls').innerHTML)
        const valueConditional = (num) => {
            return num >= 0;
        }
        
        expect(valueConditional(value)).toBe(true)
    })
})