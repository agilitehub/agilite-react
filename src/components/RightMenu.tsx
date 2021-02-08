import * as React from 'react'
import Drawer from 'antd/es/drawer'
import Menu from 'antd/es/menu'

import { Theme, ThemeInterface } from '../resources/theme';

interface onRightMenuOpen {
  (event: any): any
}

interface onRightMenuClose {
  (event: any): any
}

interface MenuItem {
  key: string
  children?: Array<MenuItem>
  title: React.ReactNode | string
}

interface onMenuItemClick {
  (event: any): any
}

export interface RightMenuInterface {
  rightMenuEnabled: boolean,
  rightMenuTitle: React.ReactNode,
  menuItems: Array<MenuItem>,
  visible: boolean,
  onOpenRightMenu: onRightMenuOpen,
  onCloseRightMenu: onRightMenuClose,
  handleRightMenuItemClick: onMenuItemClick,
  expandedMenuItems: Array<string>
}

const _RightMenu: React.SFC<RightMenuInterface & ThemeInterface> = props => {
  return (
    <Drawer
      title={<div style={{ color: props.secondaryLight ? props.secondaryLight : Theme.secondaryLight }}>{props.rightMenuTitle}</div>}
        placement='right'
        closable={true}
        width={300}
        visible={props.visible}
        onClose={props.onCloseRightMenu}
        headerStyle={{
          backgroundColor: props.primary ? props.primary : Theme.primary,
          color: props.secondaryLight ? props.secondaryLight : Theme.secondaryLight
        }}
      >
        <Menu
          onClick={props.handleRightMenuItemClick}
          mode='inline'
          defaultOpenKeys={props.expandedMenuItems}
        >
          {props.menuItems.map(child1 => {
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
                                          {child4.children.map((child5: { key: string | number | null | undefined; title: React.ReactNode; }) => {
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
  )
}

const RightMenu = React.memo(_RightMenu)
export default RightMenu