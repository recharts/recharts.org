export default {
  name: 'Bar',
  props: [
    {
      name: 'bar',
      type: 'boolean',
      defaultVal: 'true',
      isOptional: true,
      desc: 'The classname of the icon on the left of the app bar. If you are using a stylesheet for your icons, enter the class name for the icon to be used here.',
    },
  ],
  examples: [
    {
      name: 'Simple AreaChart',
      url: '/examples#areaChart',
    }
  ]
};
