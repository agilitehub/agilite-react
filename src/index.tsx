import * as React from 'react'
import { Layout, Tabs } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { Theme, ThemeInterface } from './resources/theme'
import { ModuleConfig, ModuleConfigInterface } from './resources/module-config'
import 'antd/dist/antd.css'

import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'

const { Header } = Layout

interface onLeftMenuOpen {
  (event: any): any
}

interface onRightMenuOpen {
  (event: any): any
}

interface onLeftMenuClose {
  (event: any): any
}

interface onRightMenuClose {
  (event: any): any
}

interface onMenuItemClick {
  (event: any): any
}

interface MenuItem {
  key: string
  children?: Array<MenuItem>
  title: React.ReactNode | string
}

export interface LeftMenuInterface {
  enabled: boolean,
  title: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpen: onLeftMenuOpen,
  onClose: onLeftMenuClose,
  handleMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

export interface RightMenuInterface {
  enabled: boolean,
  title: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpen: onRightMenuOpen,
  onClose: onRightMenuClose,
  handleMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

export const AgiliteReact: React.FunctionComponent<ModuleConfigInterface> = props => {
  const RootContent: any = props.config.rootContent

  return (
    <div className='App'>
      {props.config.toolbar.enabled ?
        <Layout>
          <Header
            style={{
              height: '40px',
              fontSize: '13pt',
              backgroundColor: props.config.theme.primary ? props.config.theme.primary : Theme.primary,
              color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : Theme.secondaryLight
            }}
          >
            <div style={{ marginTop: '10px' }}>
              <div>
                {props.config.leftMenu.enabled ? (
                  <MenuOutlined style={{ float: 'left', marginLeft: '-30px', cursor: 'pointer' }} onClick={props.config.leftMenu.onOpen} />
                ) : null}
              </div>
              <div style={{ float: 'left', marginTop: '-23px', marginLeft: '20px' }}>
                {props.config.toolbar.title}
              </div>
              <div style={{ float: 'right', marginTop: '-23px', cursor: 'pointer', marginRight: '10px' }} >
                {props.config.toolbar.customMenus.content}
              </div>
              <div>
                {props.config.rightMenu.enabled ? (
                  <MenuOutlined style={{ float: 'right', marginRight: props.config.toolbar.customMenus.content ? '-60px' : '-40px', marginLeft: '50px', cursor: 'pointer' }} onClick={props.config.rightMenu.onOpen} />
                ) : null}
              </div>
            </div>
          </Header>
        </Layout>
        : null}
        {props.config.leftMenu.enabled ? (
          <LeftMenu
            leftMenu={props.config.leftMenu}
            theme={props.config.theme}
          />
        ) : null}
        {props.config.rightMenu.enabled ? (
          <RightMenu
            rightMenu={props.config.rightMenu}
            theme={props.config.theme}
          />
        ) : null}
      {props.config.tabNavigation.enabled ?
        <Tabs
          activeKey={props.config.tabNavigation.activeKey}
          animated={props.config.tabNavigation.animated}
          style={{ margin: 10 }}
          type='editable-card'
          hideAdd
          onChange={props.config.tabNavigation.onTabChange}
          onEdit={props.config.tabNavigation.onTabClose}
        >
          <Tabs.TabPane
            key={props.config.tabNavigation.rootTabKey}
            closable={false}
            tab={props.config.tabNavigation.rootTabTitle}
          >
            <RootContent />
          </Tabs.TabPane>
          {props.config.tabNavigation.tabs.map(tab => {
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
        :
        <RootContent />
      }
    </div>
  )
}

AgiliteReact.defaultProps = ModuleConfig
