import * as React from 'react'
import Layout from 'antd/es/layout'
import MenuOutlined from '@ant-design/icons/MenuOutlined'

import { ModuleConfigInterface } from '../resources/module-state'
import { Theme } from '../resources/theme'

const { Header } = Layout

const Toolbar: React.SFC<ModuleConfigInterface> = props => {
  return (
    <Layout>
      <Header
        style={{
          height: '40px',
          fontSize: '13pt',
          backgroundColor: props.state.theme.primary ? props.state.theme.primary : Theme.primary,
          color: props.state.theme.secondaryLight ? props.state.theme.secondaryLight : Theme.secondaryLight
        }}
      >
        <div style={{ marginTop: '10px' }}>
          <div>
            {props.state.leftMenu.enabled ? (
              <MenuOutlined style={{ float: 'left', marginLeft: '-30px', cursor: 'pointer' }} onClick={props.state.leftMenu.onOpen} />
            ) : null}
          </div>
          <div style={{ float: 'left', marginTop: '-23px', marginLeft: '20px' }}>
            {props.state.toolbar.title}
          </div>
          <div style={{ float: 'right', marginTop: '-23px', cursor: 'pointer', marginRight: '10px' }} >
            {props.state.toolbar.customMenus.content}
          </div>
          <div>
            {props.state.rightMenu.enabled ? (
              <MenuOutlined style={{ float: 'right', marginRight: props.state.toolbar.customMenus.content ? '-60px' : '-40px', marginLeft: '50px', cursor: 'pointer' }} onClick={props.state.rightMenu.onOpen} />
            ) : null}
          </div>
        </div>
      </Header>
    </Layout>
  )
}

export default Toolbar