import React, { FC } from 'react'


const Button: FC <{text: string}> = ({text}) => {
  return <button className="px-7 py-4 bg-[#00616C] rounded-full font-semibold text-white hover:scale-105 hover:bg-red-500 hover:shadow-2xl duration-300">{text}</button>;
}

export default Button

