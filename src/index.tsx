import * as React from 'react'
import merge from 'lodash/merge'

import { ModuleConfig, ModuleConfigInterface } from './resources/module-config'

import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Tabs } from './components/Tabs'
import { Toolbar } from './components/Toolbar'
import { DefaultRootContent } from './components/DefaultRootContent'

import 'antd/dist/antd.css'

export const AgiliteReact: React.FunctionComponent<ModuleConfigInterface> = customProps => {
  const RootContent: any = customProps.config.rootContent ? customProps.config.rootContent : DefaultRootContent
  const props = merge(ModuleConfig, customProps)

  return (
    <div className='App'>
      {props.config.toolbar.enabled ?
        <Toolbar config={props.config} />
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
        <Tabs config={props.config} />
        :
        <RootContent />
      }
    </div>
  )
}

AgiliteReact.defaultProps = ModuleConfig
