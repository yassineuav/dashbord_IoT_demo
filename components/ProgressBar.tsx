import React from 'react';

interface ProgressBarProps {
  percent: number; // Progress percentage
  total: number; // Progress percentage
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, total }) => {
    const status = percent === 15 ? "Complete" : "In Progress";
    const color = percent === 15 ? "text-teal-600 bg-teal-200" : "text-gray-600 bg-gray-200"
    return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
            
          <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${color}`}>
            {status}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-600">
            {Math.ceil((percent/ total)*100)}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
        <div style={{ width: `${(percent/total)*100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
