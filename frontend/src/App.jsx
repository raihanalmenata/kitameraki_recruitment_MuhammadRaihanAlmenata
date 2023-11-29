/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Stack, Pivot, PivotItem } from '@fluentui/react'

import MyTaskPage from './pages/MyTaskPage'
import SettingPage from './pages/SettingPage'

const App = () => {

  const [currentPage, setCurrentPage] = useState('MyTaskPage')
  console.log(currentPage);

  let CurrentPage = null
  switch (currentPage) {
    
    case 'MyTaskPage':
      CurrentPage = MyTaskPage;
    break;

    case 'SettingPage':
      CurrentPage = SettingPage;
    break;

  }

  return (
    <div className="app-con">
      <Stack horizontal horizontalAlign='center'>
        <Pivot onLinkClick={ e => setCurrentPage(e.props.itemKey) }>
          <PivotItem headerText='My Task' itemKey={'MyTaskPage'} />
          <PivotItem headerText='Setting' itemKey={'SettingPage'}/>
        </Pivot>
      </Stack>
      <CurrentPage/>
    </div>
  )

}

export default App