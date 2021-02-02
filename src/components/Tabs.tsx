import * as React from 'react'
import { Tabs as AntdTabs } from 'antd'

import { ModuleConfigInterface } from '../resources/module-config'

export const Tabs: React.FunctionComponent<ModuleConfigInterface> = props => {
  const RootContent: any = props.config.rootContent

  return (
    <AntdTabs
      activeKey={props.config.tabNavigation.activeKey}
      animated={props.config.tabNavigation.animated}
      style={{ margin: 10 }}
      type='editable-card'
      hideAdd
      onChange={props.config.tabNavigation.onTabChange}
      onEdit={props.config.tabNavigation.onTabClose}
    >
      <AntdTabs.TabPane
        key={props.config.tabNavigation.rootTabKey}
        closable={false}
        tab={props.config.tabNavigation.rootTabTitle}
      >
        <RootContent />
      </AntdTabs.TabPane>
      {props.config.tabNavigation.tabs.map(tab => {
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