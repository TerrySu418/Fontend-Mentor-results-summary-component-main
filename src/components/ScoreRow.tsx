import { LucideIcon } from 'lucide-react';

type ScoreRowProps = {
  icon: LucideIcon;
  label: string;
  score: number;
  color: string;
  bgColor: string;
  textColor: string;
}


const ScoreRow = ({ icon: Icon, label, score, color, bgColor, textColor}: ScoreRowProps) => {
    return (
        <div className={ `flex items-center justify-between ${bgColor} rounded-md p4 mb-4 w-48 h-10 hover:shadow-md hover:scale-[1.02] transition-all duration-300` }>
            <div className="flex items-center">
                <Icon className={`${color} w-4 h-4 mx-2`} />
                <span className={`${color} `}>{label}</span>
            </div>
            <div className="flex items-center">
                <span className={ `font-bold ${textColor}` }>{score} </span>
                <span className="text-gray-400 mx-2">/ 100</span>
            </div>
        </div>

    )
}

export default ScoreRow;