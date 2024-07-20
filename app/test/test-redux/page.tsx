'use client'

import { useAppSelector, useAppDispatch } from '@/store/hook'
import { selectTaskList, allCheck } from '@/store/services/taskSlice'
import React, { useEffect } from 'react'

const Page = () => {
  const taskList = useAppSelector(selectTaskList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(taskList)
    setTimeout(() => dispatch(allCheck(false)), 3000)
    return () => {}
  }, [dispatch, taskList])

  return <div>Page</div>
}

export default Page
