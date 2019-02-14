const CODE_PLACEHOLDER = '{code}';
const MOUNT_ID = 'mountNode';


export const template = `
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script crossorigin src="https://npmcdn.com/react@15.6.2/dist/react-with-addons.min.js"></script>
      <script crossorigin src="https://npmcdn.com/react-dom@15.6.2/dist/react-dom.min.js"></script>
      <script crossorigin src="https://npmcdn.com/prop-types/prop-types.min.js"></script>
      <script crossorigin src="https://npmcdn.com/recharts/umd/Recharts.min.js"></script>
      <script crossorigin src="https://d3js.org/d3.v5.min.js"></script>
      <title>Document</title>
      <style>*{margin:0;padding:0;}</style>
  </head>
  <body>
  <div id="${MOUNT_ID}">
  </div>
  <script type="text/babel">
    ${CODE_PLACEHOLDER}
  </script>
  </body>
</html>
`;

// 包名映射的变量名
const pkgToVarMap = {
  react: 'React',
  recharts: 'Recharts',
  'd3-scale': 'd3',
  'd3-shape': 'd3',
  'd3-scale-chromatic': 'd3',
};

export const covertImportExport = (originCode) => {
  let code = originCode;
  const reg = /import\s.*?\{[\s\S]*?\}[\s\S]*?;/g;

  if (reg.test(code)) {
    const injects = code.match(reg);
    injects.forEach((item) => {
      const tempVar = item.replace(/(.*?\{|\}.*)/g, '');
      const tempPkg = pkgToVarMap[
        item
          .replace(/^([\s\S]*?['"])/g, '')
          .replace(/['"][\s\S]*/, '')
          .trim()
      ];
      const temp = `const {${tempVar}}=${tempPkg};`;
      code = code.replace(item, temp);
    });
  }
  code = code
    .replace(/import.*?;/g, '')
    .replace(/as\s*?any\s*?;/g, '')
    .replace(/\(window\s+?as\s+?any\)/g, 'window')
    .replace(/as\s*?any\s*?/g, '')
    .replace(/const.*?require.*?;/g, '');

  code = code.replace(/export\s*?default/g, '');
  code += ` ReactDOM.render(<Example />, document.getElementById("${MOUNT_ID}"));`;

  return code;
};

export const combineFrameContent = (code) => {
  const realCode = covertImportExport(code);

  console.log(template.replace(CODE_PLACEHOLDER, realCode));

  return template.replace(CODE_PLACEHOLDER, realCode);
};
