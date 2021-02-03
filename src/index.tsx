import * as React from 'react'
import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { ModuleConfig, ModuleConfigInterface } from './resources/module-state'

import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Tabs } from './components/Tabs'
import { Toolbar } from './components/Toolbar'
import { DefaultRootContent } from './components/DefaultRootContent'

import 'antd/dist/antd.css'

export const AgiliteReact: React.FunctionComponent<ModuleConfigInterface> = customProps => {
  const RootContent: any = customProps.state.rootContent ? customProps.state.rootContent : DefaultRootContent
  const customizer = (objValue:any, srcValue:any) => {
    if (isArray(objValue)) return srcValue
  }
  const props = mergeWith(ModuleConfig, customProps, customizer)

  return (
    <div className='App'>
      {props.state.toolbar.enabled ?
        <Toolbar state={props.state} />
        : null}
        {props.state.leftMenu.enabled ? (
          <LeftMenu
            leftMenu={props.state.leftMenu}
            theme={props.state.theme}
          />
        ) : null}
        {props.state.rightMenu.enabled ? (
          <RightMenu
            rightMenu={props.state.rightMenu}
            theme={props.state.theme}
          />
        ) : null}
      {props.state.tabNavigation.enabled ?
        <Tabs state={props.state} />
        :
        <RootContent />
      }
    </div>
  )
}

AgiliteReact.defaultProps = ModuleConfig
