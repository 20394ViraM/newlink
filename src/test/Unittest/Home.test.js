import {render} from '@testing-library/react';
import Home from "../../pages/Home.js";

describe('Home Page', ()=>{

    test('render home page', ()=>{
        render(<Home/>);
    });

    test('checking title', () => {
        const { getByText } = render(<Home />);
        const title = getByText('Home');
        expect(title).toBeInTheDocument();
    });

    test('checking Heading', () => {
        const { getByText } = render(<Home />);
        const heading = getByText('New Link');
        expect(heading).toBeInTheDocument();
    });
});