import { useState } from 'react';
import { CartesianGrid, Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const initialData = [
  { name: 1, cost: 4.11, impression: 100 },
  { name: 2, cost: 2.39, impression: 120 },
  { name: 3, cost: 1.37, impression: 150 },
  { name: 4, cost: 1.16, impression: 180 },
  { name: 5, cost: 2.29, impression: 200 },
  { name: 6, cost: 3, impression: 499 },
  { name: 7, cost: 0.53, impression: 50 },
  { name: 8, cost: 2.52, impression: 100 },
  { name: 9, cost: 1.79, impression: 200 },
  { name: 10, cost: 2.94, impression: 222 },
  { name: 11, cost: 4.3, impression: 210 },
  { name: 12, cost: 4.41, impression: 300 },
  { name: 13, cost: 2.1, impression: 50 },
  { name: 14, cost: 8, impression: 190 },
  { name: 15, cost: 0, impression: 300 },
  { name: 16, cost: 9, impression: 400 },
  { name: 17, cost: 3, impression: 200 },
  { name: 18, cost: 2, impression: 50 },
  { name: 19, cost: 3, impression: 100 },
  { name: 20, cost: 7, impression: 100 },
];

enum DataRef {
  cost = 'cost',
  impression = 'impression',
}

const getAxisYDomain = (from: number, to: number, ref: DataRef, offset: number) => {
  const refData = initialData.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach((d) => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
  data: initialData,
  left: 'dataMin' as number | string,
  right: 'dataMax' as number | string,
  refAreaLeft: '' as number | string,
  refAreaRight: '' as number | string,
  top: 'dataMax+1' as number | string,
  bottom: 'dataMin-1' as number | string,
  top2: 'dataMax+20' as number | string,
  bottom2: 'dataMin-20' as number | string,
};

export default function HighlightAndZoomLineChart() {
  const [data, setData] = useState(initialState.data);
  const [left, setLeft] = useState(initialState.left);
  const [right, setRight] = useState(initialState.right);
  const [refAreaLeft, setRefAreaLeft] = useState(initialState.refAreaLeft);
  const [refAreaRight, setRefAreaRight] = useState(initialState.refAreaRight);
  const [top, setTop] = useState(initialState.top);
  const [bottom, setBottom] = useState(initialState.bottom);
  const [top2, setTop2] = useState(initialState.top2);
  const [bottom2, setBottom2] = useState(initialState.bottom2);

  const zoom = () => {
    let leftVal = refAreaLeft;
    let rightVal = refAreaRight;

    if (leftVal === rightVal || rightVal === '') {
      setRefAreaLeft('');
      setRefAreaRight('');
      return;
    }

    if (leftVal > rightVal) [leftVal, rightVal] = [rightVal, leftVal];

    const [newBottom, newTop] = getAxisYDomain(Number(leftVal), Number(rightVal), DataRef.cost, 1);
    const [newBottom2, newTop2] = getAxisYDomain(Number(leftVal), Number(rightVal), DataRef.impression, 50);

    setRefAreaLeft('');
    setRefAreaRight('');
    setData(data.slice());
    setLeft(leftVal);
    setRight(rightVal);
    setBottom(newBottom);
    setTop(newTop);
    setBottom2(newBottom2);
    setTop2(newTop2);
  };

  const zoomOut = () => {
    setData(initialData.slice());
    setRefAreaLeft('');
    setRefAreaRight('');
    setLeft('dataMin');
    setRight('dataMax');
    setTop('dataMax+1');
    setBottom('dataMin');
    setTop2('dataMax+50');
    setBottom2('dataMin+50');
  };

  return (
    <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
      <button type="button" className="btn update" onClick={zoomOut}>
        Zoom Out
      </button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={data}
          onMouseDown={(e) => setRefAreaLeft(e?.activeLabel ?? 0)}
          onMouseMove={(e) => refAreaLeft && setRefAreaRight(e?.activeLabel ?? 0)}
          onMouseUp={zoom}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey="name" domain={[left, right]} type="number" />
          <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
          <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
          <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
