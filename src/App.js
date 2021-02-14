import React from 'react'
import { Text, Page } from '@geist-ui/react'

function App() {
  return (
    <Page dotBackdrop size="mini">
      <Page.Header>
        <Text h2>React Application with Geist UI</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> !
      </Text>
    </Page>
  )
}

export default App
