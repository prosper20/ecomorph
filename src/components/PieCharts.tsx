

import { PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

interface DataProps{
    name: string;
    percent: number;
}

interface Props{
    width: number;
    outerRadius: number;
    className: string;
    labelName?: boolean;
    height?: number;
    label?: boolean;
}

const data: DataProps[] = [
    {name: "Repeat Business", percent: 17},
    {name: "New Business", percent: 83},
]

const COLORS = [ '#999999', '#0088FE'];


const PieCharts: React.FC<Props> = ({width, className, outerRadius, height, label, labelName}) => {
    return <div className={`${className} recharts-pie`}>
        <PieChart width={width} height={height ?? width} className='w-[40%]'>
            <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            labelLine={false}
        label={({ name, percent }) => `${labelName ? `${name}: ${(percent * 100/100).toFixed(0)}%` : ''}`}
        outerRadius={outerRadius}
        fill="#8884d8"
        dataKey="percent"
            >
                 {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: number) => value + "%"}/>
      {label && <Legend />}
        </PieChart>

    </div>
}

export default PieCharts