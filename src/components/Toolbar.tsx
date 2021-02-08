import * as React from 'react'
import Layout from 'antd/es/layout'
import MenuOutlined from '@ant-design/icons/MenuOutlined'

import { Theme, ThemeInterface } from '../resources/theme'
import { LeftMenuInterface } from './LeftMenu'
import { RightMenuInterface } from './RightMenu'

const { Header } = Layout

interface ToolbarInterface {
  enabled: boolean,
  title: React.ReactNode | string,
  customMenus: {
    content: React.ReactNode,
  }
}

const _Toolbar: React.SFC<ToolbarInterface & ThemeInterface & LeftMenuInterface & RightMenuInterface> = props => {
  console.log('Agilite React - Toolbar')
  return (
    <Layout>
      <Header
        style={{
          height: '40px',
          fontSize: '13pt',
          backgroundColor: props.primary || Theme.primary,
          color: props.secondaryLight || Theme.secondaryLight
        }}
      >
        <div style={{ marginTop: '10px' }}>
          <div>
            {props.leftMenuEnabled ? (
              <MenuOutlined style={{ float: 'left', marginLeft: '-30px', cursor: 'pointer' }} onClick={props.onOpenLeftMenu} />
            ) : null}
          </div>
          <div style={{ float: 'left', marginTop: '-23px', marginLeft: '20px' }}>
            {props.title}
          </div>
          <div style={{ float: 'right', marginTop: '-23px', cursor: 'pointer', marginRight: '10px' }} >
            {props.customMenus.content}
          </div>
          <div>
            {props.rightMenuEnabled ? (
              <MenuOutlined style={{ float: 'right', marginRight: props.customMenus.content ? '-60px' : '-40px', marginLeft: '50px', cursor: 'pointer' }} onClick={props.onOpenRightMenu} />
            ) : null}
          </div>
        </div>
      </Header>
    </Layout>
  )
}

const Toolbar  = React.memo(_Toolbar)
export default Toolbar