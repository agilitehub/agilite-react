# agilite-react
---

A ReactJS module that allows you to create SPA's (Single Page Applications) with the ability to send through custom content and state as props

## Installation 🔨

Using NPM:

```js
npm install agilite-react
```

> *Note*: agilite-react uses [Ant Design](https://ant.design/) for its components and styling

## Usage 💻

**Import the **AgiliteReact** Component**
```js
import { AgiliteReact } from 'agilite-react'
```

**Basic Renderding**
- When the component is rendered without any properties it uses default properties to render a simple *SPA*
```js
function App () {
  return (
    <AgiliteReact />
  )
}
```

**Custom Rendering**
In order to customise what is rendered use the following properties
- *[config]()* [object]: Root property containing the application configuration
  - *[rootContent]()* [React.ReactNode]: Main content that is rendered if tab navigation is disabled
  - *[theme]()* [object]: Theme object - default theme below
  ```js
  {
    primary: '#d32f2f',
    primaryLight: '#ff6659',
    primaryDark: '#9a0007',
    secondary: '#e0e0e0',
    secondaryLight: '#ffffff',
    secondaryDark: '#aeaeae'
  }
  ```
  - *[leftMenu]()* [object]: Left menu properties
    - *[title]()* [string]: Menu title
    - *[enabled]()* [boolean]: Enable/Disable Menu
    - *[menuItems]()*: Array of Menu Item Objects, example below
      ```js
      [
        {
          key: 'todos', // string - Menu Item Key
          title: 'Todo', // String/React.ReactNode
          children: [ // Sub Menu Items
            {
              key: 'all_todos',
              title: 'All Todos' // String/React.ReactNode
            }
          ]
        }
      ]
      ```
      > Note: Menu items can contain children properties to nest sub menus
    - *[visible]()*: [boolean]: Control when the menu drawer is open or closed
    - *[onOpen]()*: [function(event)]: This function is called whenever the menu is opened, state can be used here to set the *visible* property accordingly
    - *[onClose]()*: [function(event)]: This function is called whenever the menu is closed, state can be used here to set the *visible* property accordingly
    - *[handleMenuItemClick]()*: [function(event)]: This function is called whenever a menu item is clicked, the event contains a *key* property which matches the key of the clicked menu item
    - *[expandedMenuItems]()* [array(string)]: Array containing the sub menu item key(s) that have to be expanded by default
      > Note: All the 'leftMenu' rules apply for the 'rightMenu'
  - *[toolbar]()* [object]: Toolbar at the top of the application
    - *[enabled]()* [boolean]: Whether the toolbar is enabled/disabled
    - *[title]()* [string]: The toolbar title
    - *[customMenus]()* [object]: Custom menus within the toolbar (see example below)
    ```js
    customMenus: {
      content: <SignOutIcon /> // React.ReactNode || String
    }
    ```
  - *[tabNavigation]()* [object]: Application tab navigation configuration
    - *[enabled]()* [boolean]: Whether tab navigation is enabled/disabled
    - *[activeKey]()* [string]: Active tab key
    - *[animated]()* [boolean]: Animated Tabs
    - *[rootTabContent]()* [React.ReactNode]: The content of the main/root tab
    - *[rootTabKey]()* [string]: Key of the root tab
    - *[rootTabTitle]()* [string]: Title of the root tab
    - *[tabs]()* [array]: Array containing tab objects (below is an example of a tab object)
    ```js
    {
      key: 'users', // string - Tab key
      closeable: true, // boolean - Whether the tab is closeable
      title: 'Users', // string - Tab title
      content: <Users /> // React.ReactNode - The content of the tab
    }
    ```
    - *[onTabChange]()* [function(key)]: This function is called whenever a tab is clicked, the clicked tab key is passed to the function
    - *[onTabClose]()* [function(key)]: This function is called when the close icon on a tab is clicked, the key of the tab requesting to close is passed to the function

---
**Below is an example of the default configuration**


```js
{
  rootContent: <div>Root Content</div>,
  theme: {},
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
```


