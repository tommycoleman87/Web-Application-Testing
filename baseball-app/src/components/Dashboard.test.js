import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Dashboard from '../components/Dashboard';
import Display from '../components/Display';

describe('<Dashboard />', () => {
    it('should fire the strikes event and increase strikes by 1 or set to 0 if at 2', () => {
        const wrapper = render(<Dashboard />);
        const btnEvent = wrapper.getByTestId('strikebtn');
        fireEvent.click(btnEvent);
        const strikes = wrapper.getByTestId('strikes')
        expect(strikes.textContent).toBe('1');
        fireEvent.click(btnEvent);
        expect(strikes.textContent).toBe('2');
        fireEvent.click(btnEvent);
        expect(strikes.textContent).toBe('0');
    })

    it('should fire the balls event and increase balls by 1 or set to 0 if at 3', () => {
        const wrapper = render(<Dashboard />);
        const btnEvent = wrapper.getByTestId('ballbtn');
        fireEvent.click(btnEvent);
        const balls = wrapper.getByTestId('balls')
        expect(balls.textContent).toBe('1');
        fireEvent.click(btnEvent);
        expect(balls.textContent).toBe('2');
        fireEvent.click(btnEvent);
        expect(balls.textContent).toBe('3');
        fireEvent.click(btnEvent);
        expect(balls.textContent).toBe('0');
    })

    it('should fire the hit event and reset balls and strikes to 0', () => {
        const wrapper = render(<Dashboard />);
        const btnEvent = wrapper.getByTestId('hitbtn');
        const ballBtnEvent = wrapper.getByTestId('ballbtn');
        const strikeBtnEvent = wrapper.getByTestId('strikebtn');
        const balls = wrapper.getByTestId('balls')
        const strikes = wrapper.getByTestId('strikes');
        fireEvent.click(ballBtnEvent)
        fireEvent.click(strikeBtnEvent)
        expect(balls.textContent).toBe('1')
        expect(strikes.textContent).toBe('1')
        fireEvent.click(btnEvent);
        expect(strikes.textContent).toBe('0')
        expect(balls.textContent).toBe('0')
    })

    it('should fire the foul event and increase strikes by 1 or do nothing if strikes are at 2', () => {
        const wrapper = render(<Dashboard />);
        const foulBtnEvent = wrapper.getByTestId('foulbtn');
        const strikes = wrapper.getByTestId('strikes')
        fireEvent.click(foulBtnEvent);
        expect(strikes.textContent).toBe('1');
        fireEvent.click(foulBtnEvent);
        expect(strikes.textContent).toBe('2');
        fireEvent.click(foulBtnEvent);
        expect(strikes.textContent).toBe('2');
    })
})