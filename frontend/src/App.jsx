/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Pivot, PivotItem, Text } from '@fluentui/react'

import MyTaskPage from './pages/MyTaskPage'
import SettingPage from './pages/SettingPage'

const App = () => {

  const [currentPage, setCurrentPage] = useState('MyTaskPage')

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
      <nav className="navbar">
          <Pivot onLinkClick={ e => setCurrentPage(e.props.itemKey) }>
              <PivotItem headerText='My Task' itemKey={'MyTaskPage'} />
              <PivotItem headerText='Setting' itemKey={'SettingPage'}/>
            </Pivot>
      </nav>
      <CurrentPage/>
    </div>
  )

}

export default App