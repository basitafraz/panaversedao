
import React, { FC } from 'react'
interface props {
  heading: string
  description: string
  number: number
  border ?: boolean
};

const Card: FC <props> = ( { heading, description, number, border="true"} ) => {
  return (
    <div
      className={`${ border && "border-2"} rounded-lg w-full px-8 py-12 relative`}
    >
      
      <h4 className="font-bold text-lg">{heading}</h4>
      <p className="mt-2 text-slate-600">{description}</p>
      <span className="absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200">
        {number}
      </span>
    </div>
  );
}

export default Card