import * as React from 'react'

import { Layout, Tabs, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import 'antd/dist/antd.css'

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
    leftMenu: {
      enabled: boolean,
      title: React.ReactNode,
      menuItems: Array<MenuItem>,
      visible: boolean,
      onOpen: onLeftMenuOpen,
      onClose: onLeftMenuClose,
      handleMenuItemClick: onMenuItemClick,
    },
    rightMenu: {
      enabled: boolean,
      title: React.ReactNode,
      menuItems: Array<MenuItem>,
      visible: boolean,
      onOpen: onRightMenuOpen,
      onClose: onRightMenuClose,
      handleMenuItemClick: onMenuItemClick,
    },
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

export const AgiliteReact: React.SFC<ConfigProps> = props => {
  return (
    <div className='App'>
      {props.config.toolbar.enabled ?
        <Layout>
          <Header
            style={{
              height: '40px',
              fontSize: '13pt',
              backgroundColor: props.config.theme.primary ? props.config.theme.primary : '#d32f2f',
              color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : '#ffffff'
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
              <div style={{ float: 'right', marginTop: '-23px', cursor: 'pointer' }} >
                {props.config.toolbar.customMenus.content}
              </div>
              <div>
                {props.config.rightMenu.enabled ? (
                  <MenuOutlined style={{ float: 'right', marginRight: '-40px', marginLeft: '50px', cursor: 'pointer' }} onClick={props.config.rightMenu.onOpen} />
                ) : null}
              </div>
            </div>
          </Header>
        </Layout>
        : null}
        {props.config.leftMenu.enabled ? (
          <Drawer
            title={<div style={{ color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : '#ffffff' }}>{props.config.leftMenu.title}</div>}
            placement='left'
            closable={true}
            width={300}
            visible={props.config.leftMenu.visible}
            onClose={props.config.leftMenu.onClose}
            headerStyle={{
              backgroundColor: props.config.theme.primary ? props.config.theme.primary : '#d32f2f'
            }}
          >
            <Menu
              onClick={props.config.leftMenu.handleMenuItemClick}
              mode='inline'
            >
              {props.config.leftMenu.menuItems.map(child1 => {
                if (child1.children && child1.children.length > 0) {
                  return (
                    <Menu.SubMenu
                      key={child1.key}
                      title={child1.title}
                    >
                      {child1.children.map(child2 => {
                        if (child2.children && child2.children.length > 0) {
                          return (
                            <Menu.SubMenu
                              key={child2.key}
                              title={child2.title}
                            >
                              {child2.children.map(child3 => {
                                if (child3.children && child3.children.length > 0) {
                                  return (
                                    <Menu.SubMenu
                                      key={child3.key}
                                      title={child3.title}
                                    >
                                      {child3.children.map(child4 => {
                                        if (child4.children && child4.children.length > 0) {
                                          return (
                                            <Menu.SubMenu
                                              key={child4.key}
                                              title={child4.title}
                                            >
                                              {child4.children.map(child5 => {
                                                return <Menu.Item key={child5.key}>{child5.title}</Menu.Item>
                                              })}
                                            </Menu.SubMenu>
                                          )
                                        } else {
                                          return <Menu.Item key={child4.key}>{child4.title}</Menu.Item>
                                        }
                                      })}
                                    </Menu.SubMenu>
                                  )
                                } else {
                                  return <Menu.Item key={child3.key}>{child3.title}</Menu.Item>
                                }
                              })}
                            </Menu.SubMenu>
                          )
                        } else {
                          return <Menu.Item key={child2.key}>{child2.title}</Menu.Item>
                        }
                      })}
                    </Menu.SubMenu>
                  )
                } else {
                  return <Menu.Item key={child1.key}>{child1.title}</Menu.Item>
                }
              })}
            </Menu>
          </Drawer>
        ) : null}
        {props.config.rightMenu.enabled ? (
          <Drawer
          title={<div style={{ color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : '#ffffff' }}>{props.config.rightMenu.title}</div>}
            placement='right'
            closable={true}
            width={300}
            visible={props.config.rightMenu.visible}
            onClose={props.config.rightMenu.onClose}
            headerStyle={{
              backgroundColor: props.config.theme.primary ? props.config.theme.primary : '#d32f2f',
              color: props.config.theme.secondaryLight ? props.config.theme.secondaryLight : '#ffffff'
            }}
          >
            <Menu
              onClick={props.config.rightMenu.handleMenuItemClick}
              mode='inline'
            >
              {props.config.rightMenu.menuItems.map(child1 => {
                if (child1.children && child1.children.length > 0) {
                  return (
                    <Menu.SubMenu
                      key={child1.key}
                      title={child1.title}
                    >
                      {child1.children.map(child2 => {
                        if (child2.children && child2.children.length > 0) {
                          return (
                            <Menu.SubMenu
                              key={child2.key}
                              title={child2.title}
                            >
                              {child2.children.map(child3 => {
                                if (child3.children && child3.children.length > 0) {
                                  return (
                                    <Menu.SubMenu
                                      key={child3.key}
                                      title={child3.title}
                                    >
                                      {child3.children.map(child4 => {
                                        if (child4.children && child4.children.length > 0) {
                                          return (
                                            <Menu.SubMenu
                                              key={child4.key}
                                              title={child4.title}
                                            >
                                              {child4.children.map(child5 => {
                                                return <Menu.Item key={child5.key}>{child5.title}</Menu.Item>
                                              })}
                                            </Menu.SubMenu>
                                          )
                                        } else {
                                          return <Menu.Item key={child4.key}>{child4.title}</Menu.Item>
                                        }
                                      })}
                                    </Menu.SubMenu>
                                  )
                                } else {
                                  return <Menu.Item key={child3.key}>{child3.title}</Menu.Item>
                                }
                              })}
                            </Menu.SubMenu>
                          )
                        } else {
                          return <Menu.Item key={child2.key}>{child2.title}</Menu.Item>
                        }
                      })}
                    </Menu.SubMenu>
                  )
                } else {
                  return <Menu.Item key={child1.key}>{child1.title}</Menu.Item>
                }
              })}
            </Menu>
          </Drawer>
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
    theme: {
      primary: '#d32f2f',
      primaryLight: '#ff6659',
      primaryDark: '#9a0007',
      secondary: '#e0e0e0',
      secondaryLight: '#ffffff',
      secondaryDark: '#aeaeae'
    },
    leftMenu: {
      title: 'Left Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {}
    },
    rightMenu: {
      title: 'Right Menu',
      enabled: true,
      menuItems: [],
      visible: false,
      onOpen: () => {},
      onClose: () => {},
      handleMenuItemClick: () => {}
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
