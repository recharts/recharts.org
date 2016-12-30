const map = {
  index: {
    loading: 'Loading',
    success: 'Success',
    error: 'Error',
    empty: 'Empty',
  },
  api: {
    placeholder: 'Search',
  },
  examples: {
    placeholder: 'Search',
  },
  blog: {
    placeholder: 'Please choose...',
  },
  frame: {
    guide: 'Guide',
    api: 'API',
    examples: 'Examples',
    blog: 'Blog',
    contract: 'Contact us by',
  },
  guide: {
    guide: 'Guide',
    installation: 'Installation',
    'getting-started': 'Getting Started',
    customize: 'Customize',
  },
  installation: {
    installation: 'Installation',
    'npm-desc': 'NPM is the easiest and fastest way to get started using Recharts. It is also the recommended installation method when building single-page applications (SPAs). It pairs nicely with a CommonJS module bundler such as ',
    'umd-desc': 'The UMD build is also available on unpkg.com ',
    'umd-use': 'You can find the library on ',
    'dev-build': 'Dev Build',
    dot: '.',
  },
  'getting-started': {
    'getting-started': 'Getting Started',
    'step-1-title': '1. Choose the type of chart you need',
    'step-1-desc': 'Generate a simple chart by using plain javascript data (usually an array of objects).',
    'step-2-title': '2. Add components that you want to be drawn',
    'step-2-desc': 'LineChart can have XAxis, YAxis, Legend, CartesianGrid and so on.',
    'step-3-title': '3. Adjust the props of some components',
    'step-3-desc': 'For example, margin-right should be bigger in order to display the right-most x-axis label and the stroke style of the cartesian grid can be dashed for better readability.',
    'step-4-title': '4. Add interactions',
    'step-4-desc': 'We can easily drop-in a Tooltip component and have rich hovering tooltip functionality.',
    'step-5-title': '5. Customize your components',
    'step-5-desc': 'For example, you can edit your x-axis label very easily by passing in a custom axis tick component. You can do similar things with other graphs as well, such as custom shapes for bar charts and much more!',
  },
  'customize': {
    'customize': 'Customize',
    'step-1-title': '1. Labels of line, area, bar, axis can be customized',
    'step-1-desc': 'For example, we can create a bar with customized label and customized axis tick.',
    'step-2-title': '2. The shape of bar can be customized',
    'step-2-desc': 'The props shape of <Bar /> can be set to be a function or a react element to render customized shape.',
    'step-3-title': '3. Tooltip 的内容可以自定义',
    'step-3-desc': '我们经常需要在提示浮层中展示更多的信息，这时候就可以时候自定义的 content 。',
    'step-4-title': '4. 组件样式支持 svg 属性',
    'step-4-desc': '除了 Tooltip 和 Legend 使用 html 实现的，其他的组件都是纯 svg 实现，支持 svg 的所有属性。',
    'step-5-title': '5. Tooltip 和 Legend 支持自定义的 style',
    'step-5-desc': 'Tooltip 和 Legend 是使用 html 实现的，开放了 style 相关的 api ，当然也可以通过 css 来改变样式。',
  },
};


export default map;
