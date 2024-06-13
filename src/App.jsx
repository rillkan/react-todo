import { useState } from 'react'
import './App.css'
import { RiCheckboxBlankFill } from 'react-icons/ri'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TbPencilPlus } from "react-icons/tb"

function App() {


  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <p className='header-title'>
            My Tasks
          </p>
          <div className='header-add-task'>
            <p className='header-add-task-text'>
              <TbPencilPlus />
            </p>
          </div>
        </div>
      </div>
      <div className='to-do-list'>
        <div className='to-do-container'>
          <p className='to-do-checkbox'>
            <RiCheckboxBlankFill />
          </p>
          <p className='to-do-text'>
            Buy some groceries
          </p>
          <p className='to-do-delete'>
            <RiDeleteBin6Line />
          </p>
        </div>

      </div>
    </>
  )
}

export default App
