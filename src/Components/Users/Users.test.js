import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Users } from './Users';

const mockOnClick = jest.fn((id) => id);
const items = [
  {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      }
  }
];

test('should render without crashing', () => {
    const { container } = render(<Users nameUserList={[]} />);
    expect(container.firstChild).toBeInTheDocument()
});

test('should render the right number of username-item', () => {
    
    const { getAllByTestId, queryAllByTestId, rerender } = render(<Users nameUserList={[]} onClick={mockOnClick} />);
    expect(queryAllByTestId('username-item').length).toBe(0);
    rerender(<Users nameUserList={items} />);
    expect(getAllByTestId('username-item').length).toBe(items.length); 
})

test('should call the onClick Method', () => {
    const { getByText } = render(<Users nameUserList={items} onClick={mockOnClick} />);
    const item = getByText(/Leanne Graham/);
    fireEvent.click(item);
    expect(mockOnClick).toHaveBeenCalled();
})