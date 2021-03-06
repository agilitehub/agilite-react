import * as React from 'react'
import { Drawer, Menu } from 'antd'

import { leftMenu } from './index'

import theme from './theme';

interface props {
  theme: any,
  leftMenu: leftMenu
}

export const LeftMenu: React.SFC<props> = props => {
  return (
    <Drawer
      title={<div style={{ color: props.theme.secondaryLight ? props.theme.secondaryLight : theme.secondaryLight }}>{props.leftMenu.title}</div>}
      placement='left'
      closable={true}
      width={300}
      visible={props.leftMenu.visible}
      onClose={props.leftMenu.onClose}
      headerStyle={{
        backgroundColor: props.theme.primary ? props.theme.primary : theme.primary
      }}
    >
      <Menu
        onClick={props.leftMenu.handleMenuItemClick}
        mode='inline'
        defaultOpenKeys={props.leftMenu.expandedMenuItems}
      >
        {props.leftMenu.menuItems.map(child1 => {
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