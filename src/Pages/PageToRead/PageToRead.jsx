import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  LabelList,
  Label,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: 'stroke-width 0.3s ease-out',
      }}
    />
  );
};

const CustomColorLabel = (props) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const PageToRead = () => {
  const data = useLoaderData();
  return (
    <div className='md:w-10/12 mx-auto'>
      <div className='flex justify-center p-8 md:p-20 bg-gray-100 my-10'>
        <BarChart
          style={{ width: '100%', aspectRatio: 1.618 }}
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip cursor={{ fillOpacity: 0.5 }} />
          <Link to={`/`}><XAxis dataKey="bookName" /></Link>
          <YAxis width="auto" />
          <Bar dataKey="totalPages" shape={TriangleBar}>
            <LabelList content={CustomColorLabel} position="top" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PageToRead;