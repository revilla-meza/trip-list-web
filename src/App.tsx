import React, { ReactComponentElement } from 'react';
import './App.css';


interface MyComponentProps {
  name: string,
  amount: number,
}

function MyComponent({ name, amount }: MyComponentProps) {
  return (
    <div>
      hello {name}!

      this is your amount: {amount}
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent name="Luis"/>
    </div>
  );
}

export default App;
