"use client"
import useStore, { textAlignEnum } from '@/store/useStore'
import React, { useEffect, useState } from 'react'

const Toolbar = () => {
    const { activeCell,updateAlignment } = useStore()
    const activeCellTitle=activeCell==""?"Not Selected":activeCell
    const [isActiveCell,setIsActiveCell]=useState(false)
    let col = activeCell.split('-')[1]; 
    let row = activeCell.split('-')[0];

    useEffect(()=>{
      col = activeCell.split('-')[1]; 
      row = activeCell.split('-')[0];
      setIsActiveCell(true)

    },[activeCell])
  return (
    <div className='flex'>
        <div className='p-5 w-[400px]'>Active Cell: {activeCellTitle}</div>
        <div className='flex m-5'>
         <div className='p-5'>Align Text</div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' disabled={!isActiveCell} onClick={()=>updateAlignment(Number(row),col,textAlignEnum.START)} >Start</button>
          <button  className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' disabled={!isActiveCell} onClick={()=>updateAlignment(Number(row),col,textAlignEnum.CENTER)}>Center</button>
          <button  className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' disabled={!isActiveCell} onClick={()=>updateAlignment(Number(row),col,textAlignEnum.END)}>End</button>
        </div>
    </div>
  )
}

export default Toolbar
