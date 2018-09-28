function syntaxHighlight(json, className = 'highlight-json') {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const formatStr = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
    let cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }

    return `<span class="${cls}">${match}</span>`;
  });

  let startIndex = 0;
  const strLength = formatStr.length;
  const keySpanStr = '<span class="key">';
  const valueSpanStr = '<span class="';
  const endStr = '</span>';
  let finalStr = '';

  let count = 0;

  while (formatStr && formatStr.indexOf(keySpanStr, startIndex) >= 0 && count < 100) {
    const nextKeySpanIndex = formatStr.indexOf(keySpanStr, startIndex);
    const nextValueSpanIndex = formatStr.indexOf(valueSpanStr, nextKeySpanIndex + 1);
    const valueSpanEndIndex = formatStr.indexOf(endStr, nextValueSpanIndex) + endStr.length;

    const thirdKeySpanIndex = formatStr.indexOf(keySpanStr, valueSpanEndIndex);
    const valueNextStr = thirdKeySpanIndex >= 0 ?
      formatStr.slice(valueSpanEndIndex, thirdKeySpanIndex) :
      '';
    const isComma = thirdKeySpanIndex >= 0 && valueNextStr.indexOf(',') >= 0 &&
      valueNextStr.indexOf(']') < 0 && valueNextStr.indexOf('}') < 0;

    // the start point
    if (startIndex === 0) {
      finalStr += `<div className="${className}">`;
    }

    if (nextKeySpanIndex > startIndex) {
      finalStr += `<div className="separator">${formatStr.slice(startIndex, nextKeySpanIndex)}</div>`;
    }
    finalStr += `<p>${formatStr.slice(nextKeySpanIndex, valueSpanEndIndex)}${isComma ? valueNextStr : ''}</p>`;

    startIndex = isComma ? thirdKeySpanIndex : valueSpanEndIndex + 1;
    count++;
  }

  finalStr += `<div className="separator">${formatStr.slice(startIndex, strLength)}</div></div>`;

  return finalStr;
}

export default syntaxHighlight;
