import * as React from 'react'
import mergeWith from 'lodash/mergeWith'
import isArray from 'lodash/isArray'

import { ModuleConfig, ModuleConfigInterface } from './resources/module-state'

import LeftMenu from './components/LeftMenu'
import RightMenu from './components/RightMenu'
import TabNavigation from './components/TabNavigation'
import Toolbar from './components/Toolbar'
import DefaultRootContent from './components/DefaultRootContent'

import 'antd/dist/antd.css'

const AgiliteReact: React.FunctionComponent<ModuleConfigInterface> = customProps => {
  const RootContent: any = customProps.state.rootContent || DefaultRootContent
  const customizer = (objValue:any, srcValue:any) => { if (isArray(objValue)) return srcValue }
  const props = mergeWith(Object.assign({}, ModuleConfig), Object.assign({}, customProps), customizer)

  return (
    <div className='App'>
      {props.state.toolbar.enabled ?
        <Toolbar
          {...props.state.leftMenu}
          {...props.state.rightMenu}
          {...props.state.toolbar}
          {...props.state.theme}
        />
        : null}
        {props.state.leftMenu.leftMenuEnabled ? (
          <LeftMenu
            {...props.state.leftMenu}
            {...props.state.theme}
          />
        ) : null}
        {props.state.rightMenu.rightMenuEnabled ? (
          <RightMenu
            {...props.state.rightMenu}
            {...props.state.theme}
          />
        ) : null}
      {props.state.tabNavigation.enabled ?
        <TabNavigation
          {...props.state.tabNavigation}
          {...props} 
        />
        :
        <RootContent />
      }
    </div>
  )
}

AgiliteReact.defaultProps = ModuleConfig

export default AgiliteReact
