---
id: jitsireact
title: Using the iframe API with React
---

Another way to quickly build on top of the jitsi embedded client is through using the `react-jutsu` library which is a component wrapper and custom react hook on top of it

Here's a sample page built with it [view live demo](https://this-fifo.github.io/jutsu/)


## Install

react-jutsu on [![NPM](https://img.shields.io/npm/v/react-jutsu.svg)](https://www.npmjs.com/package/react-jutsu)
```bash
yarn add react-jutsu
# or
npm install react-jutsu
```

## Add the Jitsi Meet API js file to the html body

```html
<body>
  <script src='https://meet.jit.si/external_api.js'></script>
</body>
```

## Two options
> You can use the provided component for simple scenarios or the hook for access to the jitsi meet api
```js
import { Jutsu } from 'react-jutsu' // Component
import { useJitsi } from 'react-jutsu' // Custom hook
```

## Sample Usage (Hook)
```jsx
import React, { useEffect } from 'react'
import { useJitsi } from 'react-jutsu'

const App = () => {
  const roomName = 'konoha'
  const parentNode = 'jitsi-container'
  const jitsi = useJitsi({ roomName, parentNode })

  useEffect(() => {
    if (jitsi) {
      jitsi.addEventListener('videoConferenceJoined', () => {
        jitsi.executeCommand('displayName', 'Naruto Uzumaki')
        jitsi.executeCommand('password', 'dattebayo')
        jitsi.executeCommand('subject', 'fan')
      })
    }
    return () => jitsi && jitsi.dispose()
  }, [jitsi])

  return <div id={parentNode} />
}
```

## Sample Usage (Component)
```jsx
import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      displayName={name}
      password={password}
      loadingComponent={<p>loading ...</p>} />
  ) : (
    <form>
      <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
      <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleClick} type='submit'>
        Start / Join
      </button>
    </form>
  )
}

export default App
```

## Supported Configuration
> Check the [Jitsi Meet API docs](https://github.com/jitsi/jitsi-meet/blob/master/doc/api.md#api--new-jitsimeetexternalapidomain-options) for full configuration and how to use api commands when using the `useJitsi` hook

### Room Name
The meeting room name
>This prop is required to start a meeting

### Display Name
The participant's displayed name
>This prop is optional

### Password
The meeting room password
>This prop is optional

### Subject
The meeting subject (what is displayed at the top)
>This prop is optional

```jsx
<Jutsu 
  roomName='naruto'
  password='dattebayo'
  displayName='uzumaki'
  subject='fan'
/>
```

### Domain
```jsx
<Jutsu domain='my-custom-domain.com'>
```
Your Jitsi domain to use, the default value is `meet.jit.si`

### Loading Component
```jsx
<Jutsu loadingComponent={<ProgressBar />}>
```
An optional loading component, the default value is `<p>Loading ...</p>`

### Styles
```jsx
<div
  style={{...containerStyle, ...containerStyles}}
>
  <div
    style={{...jitsiContainerStyle, ...jitsiContainerStyles}}
  />
</div>
```
Internally Jutsu is constructed inside 2 containers, you can add custom styles for each by specifying `containerStyles` and `jitsiContainerstyles`

The default values are

```js
const containerStyle = {
  width: '800px',
  height: '400px'
}

const jitsiContainerStyle = {
  display: loading ? 'none' : 'block', // <- used for loadingComponent logic
  width: '100%',
  height: '100%'
}
```

An example override could be
```jsx
<Jutsu containerStyles={{ width: '1200px', height: '800px' }}>
```

## Additional information

The source code for this library is also available on github at [this-fifo/jutsu](https://github.com/this-fifo/jutsu) and you can contribute to it
