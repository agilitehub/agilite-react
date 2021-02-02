import * as React from 'react'
import { Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import { ModuleConfigInterface } from '../resources/module-config'
import { Theme } from '../resources/theme'

const { Header } = Layout

export const Toolbar: React.SFC<ModuleConfigInterface> = props => {
  return (
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
  )
}