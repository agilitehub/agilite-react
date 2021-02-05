import * as React from 'react'

const DefaultRootContent: React.FunctionComponent = () => {
  return (
    <div style={{ marginTop: 20, textAlign: 'center' }}>
      <h1>Welcome to Agilit-e React</h1>
      <h3>This is the default component that is loaded when no custom root component was specified</h3>
    </div>
  )
}

export default DefaultRootContent