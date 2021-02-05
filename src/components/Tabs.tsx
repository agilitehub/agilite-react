import * as React from 'react'
import Tabs from 'antd/es/tabs'

import { ModuleConfigInterface } from '../resources/module-state'
import DefaultRootContent from './DefaultRootContent'

const CustomTabs: React.FunctionComponent<ModuleConfigInterface> = props => {
  const RootContent: any = props.state.rootContent ? props.state.rootContent : DefaultRootContent

  return (
    <Tabs
      activeKey={props.state.tabNavigation.activeKey}
      animated={props.state.tabNavigation.animated}
      style={{ margin: 10 }}
      type='editable-card'
      hideAdd
      onChange={props.state.tabNavigation.onTabChange}
      onEdit={props.state.tabNavigation.onTabClose}
    >
      <Tabs.TabPane
        key={props.state.tabNavigation.rootTabKey}
        closable={false}
        tab={props.state.tabNavigation.rootTabTitle}
      >
        <RootContent />
      </Tabs.TabPane>
      {props.state.tabNavigation.tabs.map(tab => {
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

export default CustomTabs