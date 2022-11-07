/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'category',
          label: 'Data Display',
          items: [
            'components/data-display/Avatar',
            'components/data-display/Badge',
            'components/data-display/Calendar',
            'components/data-display/Card',
            'components/data-display/Carousel',
            'components/data-display/Collapse',
            'components/data-display/CountTo',
            'components/data-display/Divider',
            'components/data-display/Image',
            'components/data-display/Popover',
            'components/data-display/Swiper',
            'components/data-display/Table',
            'components/data-display/Timeline',
            'components/data-display/Tooltip',
            'components/data-display/Tree'
          ]
        },
        {
          type: 'category',
          label: 'Data Entry',
          items: [
            'components/data-entry/AutoComplete',
            'components/data-entry/Cascader',
            'components/data-entry/ColorPicker',
            'components/data-entry/DatePicker',
            'components/data-entry/DatetimePicker',
            'components/data-entry/Form',
            'components/data-entry/FormItem',
            'components/data-entry/MonthPicker',
            'components/data-entry/Rating',
            'components/data-entry/Slider',
            'components/data-entry/Tag',
            'components/data-entry/TimePicker',
            'components/data-entry/TimeRangePicker',
            'components/data-entry/Upload'
          ]
        },
        {
          type: 'category',
          label: 'Feedback',
          items: [
            'components/feedback/Alert',
            'components/feedback/Backdrop',
            'components/feedback/Dialog',
            'components/feedback/Modal',
            'components/feedback/Notice',
            'components/feedback/Progress',
            'components/feedback/Skeleton',
            'components/feedback/Spinner',
            'components/feedback/Toast'
          ]
        },
        {
          type: 'category',
          label: 'Inputs',
          items: [
            'components/inputs/Button',
            'components/inputs/ButtonGroup',
            'components/inputs/Checkbox',
            'components/inputs/IconButton',
            'components/inputs/IconUpload',
            'components/inputs/Input',
            'components/inputs/InputCountryCode',
            'components/inputs/Pagination',
            'components/inputs/Radio',
            'components/inputs/Select',
            'components/inputs/Textarea'
          ]
        },
        {
          type: 'category',
          label: 'Layout',
          items: [
            'components/layout/ErrorBoundary',
            'components/layout/Masonry',
            'components/layout/Routes',
            'components/layout/SEO'
          ]
        },
        {
          type: 'category',
          label: 'Navigation',
          items: [
            'components/navigation/BackTop',
            'components/navigation/Breadcrumb',
            'components/navigation/Drawer',
            'components/navigation/Dropdown',
            'components/navigation/Navigation',
            'components/navigation/Stepper',
            'components/navigation/Tabs'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Hooks',
      items: [
        'hooks/useBackdrop',
        'hooks/useCombinedRefs',
        'hooks/useComponentDidUpdate',
        'hooks/useConfirm',
        'hooks/useContentEditable',
        'hooks/useHotkey',
        'hooks/useIntersectionObserver',
        'hooks/useLocalStorage',
        'hooks/useMediaQuery',
        'hooks/useObjectState',
        'hooks/useOnClickOutside',
        'hooks/useQueryParams'
      ]
    },
    {
      type: 'category',
      label: 'Utils',
      items: [
        'utils/base64ToFile',
        'utils/copyText',
        'utils/debounce',
        'utils/enumToOptions',
        'utils/EventListener',
        'utils/fileToBase64',
        'utils/getBrightness',
        'utils/hexToRgb',
        'utils/priceFormat',
        'utils/randomString',
        'utils/rgbToHex',
        'utils/throttle',
        'utils/twoDigitsNumber',
        'utils/uuid'
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/chrome-extensions',
        'settings/code-snippets',
        'settings/git-alias',
        'settings/nextjs',
        'settings/prettier',
        'settings/tailwindcss',
        'settings/tsconfig-json',
        'settings/type-defintions',
        'settings/vscode-extensions'
      ]
    },
    {
      type: 'category',
      label: 'Tips',
      items: [
        'tips/모바일에서 localhost 보는 법',
        'tips/사용중인 포트 종료하기'
      ]
    },
    {
      type: 'category',
      label: 'Bookmarks',
      items: [
        {
          type: 'category',
          label: 'Commons',
          items: [
            'bookmarks/common/patatap',
            'bookmarks/common/typatone',
            'bookmarks/common/rainymood',
            'bookmarks/common/musicforprogramming'
          ]
        },
        {
          type: 'category',
          label: 'Designs',
          items: [
            {
              type: 'category',
              label: 'Images',
              items: [
                'bookmarks/design/image/artvee',
                'bookmarks/design/image/behance',
                'bookmarks/design/image/dribble',
                'bookmarks/design/image/pravatar'
              ]
            },
            'bookmarks/design/darkmodedesign',
            'bookmarks/design/slides'
          ]
        },
        {
          type: 'category',
          label: 'Games',
          items: ['bookmarks/game/8values']
        },
        {
          type: 'category',
          label: 'Services',
          items: [
            'bookmarks/service/maily',
            'bookmarks/service/spacecloud',
            'bookmarks/service/arcade'
          ]
        },
        {
          type: 'category',
          label: 'Tools',
          items: [
            'bookmarks/tool/spectacle',
            'bookmarks/tool/telegraph',
            'bookmarks/tool/reflect',
            'bookmarks/tool/slid'
          ]
        }
      ]
    }
  ]
}

module.exports = sidebars
