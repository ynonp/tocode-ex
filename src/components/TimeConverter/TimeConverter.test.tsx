import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TimeConverter from './TimeConveter';
import { TimeConverterLogic } from './TimeConverterLogic';

test('should convert time', async () => {
    const secondsValue = 3600;
    const timeUnits = [1, 60, 3600];
    const timeConverterLogic = new TimeConverterLogic({
        ratios: timeUnits
    });
    
    const { findAllByDisplayValue, findByDisplayValue } = render(<TimeConverter timeConverterLogic={timeConverterLogic} />);
    const inputElems = await findAllByDisplayValue('0');
    fireEvent.change(inputElems[0], { target: { value:  secondsValue }});

    timeUnits.forEach((ratio: number) => {
        findByDisplayValue((secondsValue / ratio).toString());
    })
})