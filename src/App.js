import React from 'react';
import './App.css';
import { Card, Code, Note, Spacer } from '@zeit-ui/react'

function App() {
  return (
    <div className="app">
      <Card>
        hello, world. I am using <Code>@zeit-ui/react</Code> !
      </Card>
      <Spacer y={1.5} />
      <Card shadow>
        <Note type="success">This note details something important.</Note>
      </Card>
    </div>
  );
}

export default App;
