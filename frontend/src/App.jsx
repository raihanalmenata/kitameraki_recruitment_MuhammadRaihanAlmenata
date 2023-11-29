/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Stack, Pivot, PivotItem } from '@fluentui/react'

import MyTaskPage from './pages/MyTaskPage'

const App = () => {

  const [currentPage, setCurrentPage] = useState('MyTaskPage')

  let CurrentPage = null
  switch (currentPage) {
    
    case 'MyTaskPage':
      CurrentPage = MyTaskPage;
    break;

  }

  return (
    <div className="app-con">
      <Stack horizontal horizontalAlign='center'>
        <Pivot>
          <PivotItem headerText='My Task' />
          <PivotItem headerText='Setting' />
        </Pivot>
      </Stack>
      <CurrentPage/>
    </div>
  )

}

export default App