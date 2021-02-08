import * as React from 'react'
import Tabs from 'antd/es/tabs'

import { TabChangeFunctionInterface, TabCloseFunctionInterface, ModuleConfigInterface } from '../resources/module-state'
import DefaultRootContent from './DefaultRootContent'

interface TabInterface {
  enabled: boolean,
  rootTabKey: string,
  rootTabTitle: React.ReactNode | string,
  activeKey: string,
  animated: boolean,
  onTabChange: TabChangeFunctionInterface,
  onTabClose: TabCloseFunctionInterface,
  tabs: Array<{
    key: string,
    closeable: boolean,
    title: string,
    content: React.ReactNode,
  }>
}

const _CustomTabs: React.FunctionComponent<TabInterface & ModuleConfigInterface> = props => {
  const CustomRootContent: any = props.state.rootContent || DefaultRootContent

  console.log('Agilite React - Tabs')

  return (
    <Tabs
      activeKey={props.activeKey}
      animated={props.animated}
      style={{ margin: 10 }}
      type='editable-card'
      hideAdd
      onChange={props.onTabChange}
      onEdit={props.onTabClose}
    >
      <Tabs.TabPane
        key={props.rootTabKey}
        closable={false}
        tab={props.rootTabTitle}
      >
        <CustomRootContent />
      </Tabs.TabPane>
      {props.tabs.map(tab => {
        return (
          <Tabs.TabPane
            key={tab.key}
            closable={tab.closeable}
            tab={tab.title}
          >
            {tab.content}
          </Tabs.TabPane>
        )
      })}
    </Tabs>
  )
}

const CustomTabs = React.memo(_CustomTabs)
export default CustomTabs