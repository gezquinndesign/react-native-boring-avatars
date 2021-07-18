import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';
import Svg, { Mask, Rect, G } from 'react-native-svg';

const ELEMENTS = 64;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => ({
    color: getRandomColor(numFromName % (i + 13), colors, range),
  }));

  return elementsProperties;
}

const AvatarPixel = (props) => {
  const properties = generateColors(props.name, props.colors);

  return (
    <Svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <Mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <Rect
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
          fill="white"
        />
      </Mask>
      <G mask="url(#mask0)">
        <Rect width={10} height={10} fill={properties[0].color} />
        <Rect x={20} width={10} height={10} fill={properties[1].color} />
        <Rect x={40} width={10} height={10} fill={properties[2].color} />
        <Rect x={60} width={10} height={10} fill={properties[3].color} />
        <Rect x={10} width={10} height={10} fill={properties[4].color} />
        <Rect x={30} width={10} height={10} fill={properties[5].color} />
        <Rect x={50} width={10} height={10} fill={properties[6].color} />
        <Rect x={70} width={10} height={10} fill={properties[7].color} />
        <Rect y={10} width={10} height={10} fill={properties[8].color} />
        <Rect y={20} width={10} height={10} fill={properties[9].color} />
        <Rect y={30} width={10} height={10} fill={properties[10].color} />
        <Rect y={40} width={10} height={10} fill={properties[11].color} />
        <Rect y={50} width={10} height={10} fill={properties[12].color} />
        <Rect y={60} width={10} height={10} fill={properties[13].color} />
        <Rect y={70} width={10} height={10} fill={properties[14].color} />
        <Rect
          x={20}
          y={10}
          width={10}
          height={10}
          fill={properties[15].color}
        />
        <Rect
          x={20}
          y={20}
          width={10}
          height={10}
          fill={properties[16].color}
        />
        <Rect
          x={20}
          y={30}
          width={10}
          height={10}
          fill={properties[17].color}
        />
        <Rect
          x={20}
          y={40}
          width={10}
          height={10}
          fill={properties[18].color}
        />
        <Rect
          x={20}
          y={50}
          width={10}
          height={10}
          fill={properties[19].color}
        />
        <Rect
          x={20}
          y={60}
          width={10}
          height={10}
          fill={properties[20].color}
        />
        <Rect
          x={20}
          y={70}
          width={10}
          height={10}
          fill={properties[21].color}
        />
        <Rect
          x={40}
          y={10}
          width={10}
          height={10}
          fill={properties[22].color}
        />
        <Rect
          x={40}
          y={20}
          width={10}
          height={10}
          fill={properties[23].color}
        />
        <Rect
          x={40}
          y={30}
          width={10}
          height={10}
          fill={properties[24].color}
        />
        <Rect
          x={40}
          y={40}
          width={10}
          height={10}
          fill={properties[25].color}
        />
        <Rect
          x={40}
          y={50}
          width={10}
          height={10}
          fill={properties[26].color}
        />
        <Rect
          x={40}
          y={60}
          width={10}
          height={10}
          fill={properties[27].color}
        />
        <Rect
          x={40}
          y={70}
          width={10}
          height={10}
          fill={properties[28].color}
        />
        <Rect
          x={60}
          y={10}
          width={10}
          height={10}
          fill={properties[29].color}
        />
        <Rect
          x={60}
          y={20}
          width={10}
          height={10}
          fill={properties[30].color}
        />
        <Rect
          x={60}
          y={30}
          width={10}
          height={10}
          fill={properties[31].color}
        />
        <Rect
          x={60}
          y={40}
          width={10}
          height={10}
          fill={properties[32].color}
        />
        <Rect
          x={60}
          y={50}
          width={10}
          height={10}
          fill={properties[33].color}
        />
        <Rect
          x={60}
          y={60}
          width={10}
          height={10}
          fill={properties[34].color}
        />
        <Rect
          x={60}
          y={70}
          width={10}
          height={10}
          fill={properties[35].color}
        />
        <Rect
          x={10}
          y={10}
          width={10}
          height={10}
          fill={properties[36].color}
        />
        <Rect
          x={10}
          y={20}
          width={10}
          height={10}
          fill={properties[37].color}
        />
        <Rect
          x={10}
          y={30}
          width={10}
          height={10}
          fill={properties[38].color}
        />
        <Rect
          x={10}
          y={40}
          width={10}
          height={10}
          fill={properties[39].color}
        />
        <Rect
          x={10}
          y={50}
          width={10}
          height={10}
          fill={properties[40].color}
        />
        <Rect
          x={10}
          y={60}
          width={10}
          height={10}
          fill={properties[41].color}
        />
        <Rect
          x={10}
          y={70}
          width={10}
          height={10}
          fill={properties[42].color}
        />
        <Rect
          x={30}
          y={10}
          width={10}
          height={10}
          fill={properties[43].color}
        />
        <Rect
          x={30}
          y={20}
          width={10}
          height={10}
          fill={properties[44].color}
        />
        <Rect
          x={30}
          y={30}
          width={10}
          height={10}
          fill={properties[45].color}
        />
        <Rect
          x={30}
          y={40}
          width={10}
          height={10}
          fill={properties[46].color}
        />
        <Rect
          x={30}
          y={50}
          width={10}
          height={10}
          fill={properties[47].color}
        />
        <Rect
          x={30}
          y={60}
          width={10}
          height={10}
          fill={properties[48].color}
        />
        <Rect
          x={30}
          y={70}
          width={10}
          height={10}
          fill={properties[49].color}
        />
        <Rect
          x={50}
          y={10}
          width={10}
          height={10}
          fill={properties[50].color}
        />
        <Rect
          x={50}
          y={20}
          width={10}
          height={10}
          fill={properties[51].color}
        />
        <Rect
          x={50}
          y={30}
          width={10}
          height={10}
          fill={properties[52].color}
        />
        <Rect
          x={50}
          y={40}
          width={10}
          height={10}
          fill={properties[53].color}
        />
        <Rect
          x={50}
          y={50}
          width={10}
          height={10}
          fill={properties[54].color}
        />
        <Rect
          x={50}
          y={60}
          width={10}
          height={10}
          fill={properties[55].color}
        />
        <Rect
          x={50}
          y={70}
          width={10}
          height={10}
          fill={properties[56].color}
        />
        <Rect
          x={70}
          y={10}
          width={10}
          height={10}
          fill={properties[57].color}
        />
        <Rect
          x={70}
          y={20}
          width={10}
          height={10}
          fill={properties[58].color}
        />
        <Rect
          x={70}
          y={30}
          width={10}
          height={10}
          fill={properties[59].color}
        />
        <Rect
          x={70}
          y={40}
          width={10}
          height={10}
          fill={properties[60].color}
        />
        <Rect
          x={70}
          y={50}
          width={10}
          height={10}
          fill={properties[61].color}
        />
        <Rect
          x={70}
          y={60}
          width={10}
          height={10}
          fill={properties[62].color}
        />
        <Rect
          x={70}
          y={70}
          width={10}
          height={10}
          fill={properties[63].color}
        />
      </G>
    </Svg>
  );
};

export default AvatarPixel;
