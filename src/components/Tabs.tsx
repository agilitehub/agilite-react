import * as React from 'react'
import { Tabs as AntdTabs } from 'antd'

import { ModuleConfigInterface } from '../resources/module-state'
import { DefaultRootContent } from './DefaultRootContent'

export const Tabs: React.FunctionComponent<ModuleConfigInterface> = props => {
  const RootContent: any = props.state.rootContent ? props.state.rootContent : DefaultRootContent

  return (
    <AntdTabs
      activeKey={props.state.tabNavigation.activeKey}
      animated={props.state.tabNavigation.animated}
      style={{ margin: 10 }}
      type='editable-card'
      hideAdd
      onChange={props.state.tabNavigation.onTabChange}
      onEdit={props.state.tabNavigation.onTabClose}
    >
      <AntdTabs.TabPane
        key={props.state.tabNavigation.rootTabKey}
        closable={false}
        tab={props.state.tabNavigation.rootTabTitle}
      >
        <RootContent />
      </AntdTabs.TabPane>
      {props.state.tabNavigation.tabs.map(tab => {
        return (
          <AntdTabs.TabPane
            key={tab.key}
            closable={tab.closeable}
            tab={tab.title}
          >
            {tab.content}
          </AntdTabs.TabPane>
        )
      })}
    </AntdTabs>
  )
}