<!--GITHUB_BLOCK-->

# DropdownMenu

<!--/GITHUB_BLOCK-->

```tsx
import {DropdownMenu} from '@gravity-ui/uikit';
```

This is a dropdown menu component with a customizable toggle, item grouping, and submenus. The dropdown menu items are configured with the `items` prop. By default, the menu toggle is a button with the ellipsis icon (**⋯**), which can be overridden with the `switcher` prop.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Grouped items

Dropdown menu items can be grouped and visually separated from other menu items by introducing arrays of menu items nested into the `items` array.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        [
            {
                action: () => console.log('Call'),
                text: 'Call',
            },
            {
                action: () => console.log('Send email'),
                text: 'Send email',
            },
        ],
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            [
                {
                    action: () => console.log('Call'),
                    text: 'Call',
                },
                {
                    action: () => console.log('Send email'),
                    text: 'Send email',
                },
            ],
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    [
      {
        action: () => console.log('Call'),
        text: 'Call',
      },
      {
        action: () => console.log('Send email'),
        text: 'Send email',
      },
    ],
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Submenus

The `items` property on an individual menu item adds nested subitems to that menu item.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
        {
            text: 'More',
            items: [
                {
                    action: () => console.log('Mark as'),
                    text: 'Mark as',
                    items: [
                        {
                            action: () => console.log('Important'),
                            text: 'Important',
                        },
                        {
                            action: () => console.log('Favorite'),
                            text: 'Favorite',
                        },
                    ],
                },
                {
                    action: () => console.log('Copy'),
                    text: 'Copy',
                },
                {
                    text: 'Move to',
                    items: [
                        {
                            action: () => console.log('Location #1'),
                            text: 'Location #1',
                        },
                        {
                            action: () => console.log('Location #2'),
                            text: 'Location #2',
                        },
                    ],
                },
            ],
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
            {
                text: 'More',
                items: [
                    {
                        action: () => console.log('Mark as'),
                        text: 'Mark as',
                        items: [
                            {
                                action: () => console.log('Important'),
                                text: 'Important',
                            },
                            {
                                action: () => console.log('Favorite'),
                                text: 'Favorite',
                            },
                        ],
                    },
                    {
                        action: () => console.log('Copy'),
                        text: 'Copy',
                    },
                    {
                        text: 'Move to',
                        items: [
                            {
                                action: () => console.log('Location #1'),
                                text: 'Location #1',
                            },
                            {
                                action: () => console.log('Location #2'),
                                text: 'Location #2',
                            },
                        ],
                    },
                ],
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
    {
      text: 'More',
      items: [
        {
          action: () => console.log('Mark as'),
          text: 'Mark as',
          items: [
            {
              action: () => console.log('Important'),
              text: 'Important',
            },
            {
              action: () => console.log('Favorite'),
              text: 'Favorite',
            },
          ],
        },
        {
          action: () => console.log('Copy'),
          text: 'Copy',
        },
        {
          text: 'Move to',
          items: [
            {
              action: () => console.log('Location #1'),
              text: 'Location #1',
            },
            {
              action: () => console.log('Location #2'),
              text: 'Location #2',
            },
          ],
        },
      ],
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

## Custom menu toggle

The menu toggle is configured with the `switcher` prop. It can be any React component (or any `ReactNode` in the TypeScript terms). By default, the menu toggle is a button with the ellipsis icon (**⋯**).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<DropdownMenu
    switcher={
        <div style={{cursor: 'pointer', borderBottom: '1px dotted'}}>
            John Doe
        </div>
    }
    items={[
        {
            action: () => console.log('Rename'),
            text: 'Rename',
        },
        {
            action: () => console.log('Delete'),
            text: 'Delete',
            theme: 'danger',
        },
    ]}
/>
`}
>
    <UIKit.DropdownMenu
        switcher={
            <div style={{cursor: 'pointer', borderBottom: '1px dotted'}}>
                John Doe
            </div>
        }
        items={[
            {
                action: () => console.log('Rename'),
                text: 'Rename',
            },
            {
                action: () => console.log('Delete'),
                text: 'Delete',
                theme: 'danger',
            },
        ]}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<DropdownMenu
  switcher={<div style={{cursor: 'pointer', borderBottom: '1px dotted'}}>John Doe</div>}
  items={[
    {
      action: () => console.log('Rename'),
      text: 'Rename',
    },
    {
      action: () => console.log('Delete'),
      text: 'Delete',
      theme: 'danger',
    },
  ]}
/>
```

<!--/GITHUB_BLOCK-->

The example above is oversimplified to demonstrate the idea of the customizable menu toggle. In a real-life application, it is generally recommended that the clickable menu toggle be a component accessible with a keyboard and other assistive technologies.

## Properties

| Name                       | Description                                                                                         |                        Type                        | Default       |
| :------------------------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :------------ |
| `items`                    | Array of items. Nested arrays of items represent visually separated groups.                         | `(DropdownMenuItem \| DropdownMenuItem[])[] \| []` |               |
| `data`                     | A payload passed to the actions called from the menu. (Can be useful for context menus.)            |                       `any`                        |               |
| `icon`                     | An icon of the default `switcher`.                                                                  |                    `ReactNode`                     | Ellipsis icon |
| `size`                     | Applied to the default `switcher` and the menu.                                                     |         `'s' \| 'm' \| 'l' \| 'xl' \| 'm'`         |               |
| `disabled`                 | Setting this prop to `true` disables the `switcher` button and prevents the menu from being opened. |                     `boolean`                      |               |
| `switcher`                 | Menu toggle control.                                                                                |                    `ReactNode`                     |               |
| `switcherWrapperClassName` | A value for the `className` prop of the `switcher`'s parent component.                              |                      `string`                      |               |
| `defaultSwitcherProps`     | Default `switcher` props.                                                                           |                   `ButtonProps`                    |               |
| `defaultSwitcherClassName` | A value for the `className` prop of the default `switcher`.                                         |                      `string`                      |               |
| `menuProps`                | Overrides the default dropdown menu popup props.                                                    |                    `MenuProps`                     |               |
| `popupProps`               | Overrides the default popup props.                                                                  |                    `PopupProps`                    |               |
| `open`                     | Controls dropdown menu visibility.                                                                  |                     `boolean`                      |               |
| `onOpenToggle`             | Called when the menu is opened or closed.                                                           |                    `() => void`                    |               |
| `onSwitcherClick`          | Called when `switcher` is clicked.                                                                  |       `React.MouseEventHandler<HTMLElement>`       |               |
| `hideOnScroll`             | Specifies whether to hide the menu when a parent element is scrolled.                               |                     `boolean`                      | `true`        |
| `children`                 | Custom content inside the menu popup.                                                               |                    `ReactNode`                     |               |

### DropdownMenuItem

This type describes an individual dropdown menu item.

| Name         | Description                                                                                                                     |                      Type                      | Default |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------: | :-----: |
| `text`       | Menu item content.                                                                                                              |                  `ReactNode`                   |         |
| `action`     | Menu item click handler. Recieves the parameters from the parent dropdown menu component (both `event` and `data`).             | `(event: React.MouseEvent, data: any) => void` |         |
| `icon`       | Menu item icon.                                                                                                                 |                  `ReactNode`                   |         |
| `hidden`     | Whether the item is hidden.                                                                                                     |                   `boolean`                    |         |
| `disabled`   | Whether the item is disabled.                                                                                                   |                   `boolean`                    |         |
| `href`       | A menu item with this prop becomes a link to the specified location.                                                            |                    `string`                    |         |
| `target`     | Same as the `target` attribute of the `<a>` tag.                                                                                |                    `string`                    |         |
| `rel`        | Same as the `rel` attribute of the `<a>` tag.                                                                                   |                    `string`                    |         |
| `extraProps` | Additional menu item props.                                                                                                     |                    `object`                    |         |
| `title`      | Tooltip text.                                                                                                                   |                    `string`                    |         |
| `className`  | HTML `class` attribute value.                                                                                                   |                    `string`                    |         |
| `items`      | Submenu items.                                                                                                                  |  `(DropdownMenuItem \| DropdownMenuItem[])[]`  |         |
| `popupProps` | Submenu popup props.                                                                                                            |                    `string`                    |         |
| `path`       | Path of indexes from the root to the current item.                                                                              |                   `number[]`                   |         |
| `closeMenu`  | Custom `closeMenu` callback, can be called instead of closing the main menu, can be used to close submenus before the main menu |                  `() => void`                  |         |
