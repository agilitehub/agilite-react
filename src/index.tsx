import * as React from 'react'

import { Layout, Tabs, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import theme from './theme';

import 'antd/dist/antd.css'

import { LeftMenu } from './LeftMenu';
import { RightMenu } from './RightMenu';

const { Header } = Layout

interface ConfigProps {
  config: {
    rootContent: React.ReactNode,
    theme: {
      primary?: string,
      primaryLight?: string,
      primaryDark?: string,
      secondary?: string,
      secondaryLight?: string,
      secondaryDark?: string
    },
    leftMenu: leftMenu,
    rightMenu: rightMenu,
    toolbar: {
      enabled: boolean,
      title: React.ReactNode | string,
      customMenus: {
        content: React.ReactNode,
      }
    },
    tabNavigation: {
      enabled: boolean,
      rootTabKey: string,
      rootTabTitle: React.ReactNode | string,
      rootTabContent: React.ReactNode,
      activeKey: string,
      animated: boolean,
      onTabChange: onTabChangeFunction,
      onTabClose: onTabCloseFunction,
      tabs: Array<{
        key: string,
        closeable: boolean,
        title: string,
        content: React.ReactNode,
      }>
    }
  }
}
interface onTabChangeFunction {
  (key: string): string | undefined | void
}

interface onTabCloseFunction {
  (key: any, action: string): void | undefined
}

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
  key: string;
  children?: Array<MenuItem>;
  title: React.ReactNode | string;
}

export interface leftMenu {
  enabled: boolean,
  title: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpen: onLeftMenuOpen,
  onClose: onLeftMenuClose,
  handleMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

export interface rightMenu {
  enabled: boolean,
  title: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpen: onRightMenuOpen,
  onClose: onRightMenuClose,
  handleMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

export const AgiliteReact: React.SFC<ConfigProps> = props => {
  return (
    <div className='App'>
      {props.config.toolbar.enabled ?
        <Layout>
          <Header
            style={{
              height: '40px',
              fontSize: '13pt',
              backgroundColor: props.config.theme.primary ? props.config.theme.primary : theme.primary,
              color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : theme.secondaryLight
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
            {props.config.tabNavigation.rootTabContent}
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
        <>
          {props.config.rootContent}
        </>
      }
    </div>
  )
}

AgiliteReact.defaultProps = {
  config: {
    rootContent: <div>Root Content</div>,
    theme,
    leftMenu: {
      title: 'Left Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {},
      expandedMenuItems: []
    },
    rightMenu: {
      title: 'Right Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {},
      expandedMenuItems: []
    },
    toolbar: {
      enabled: true,
      title: 'Agilit-e React',
      customMenus: {
        content: null
      }
    },
    tabNavigation: {
      enabled: true,
      rootTabKey: 'home',
      rootTabTitle: 'Home',
      rootTabContent: <div>Welcome Home</div>,
      activeKey: 'home',
      animated: true,
      tabs: [],
      onTabChange: () => {},
      onTabClose: () => {}
    }
  }
}
