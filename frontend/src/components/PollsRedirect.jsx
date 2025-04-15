import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getDrip } from '../api/drips'
import { Navigate } from 'react-router-dom'

const PollsRedirect = () => {
  // fetch the drip and decide where to direct the user
  const { data: drip, isLoading, isError } = useQuery({
    queryKey: ['drip'],
    queryFn: getDrip,
  })
  console.log('drip',drip)
  // Find the index of the first unanswered question
  const firstUnansweredIndex = new Date(drip?.activityDate) > Date.now() ? -1 : drip?.questions?.findIndex(
    question => question.questionResponse === null
  )  ?? -1

  useEffect(() => console.log(drip), [drip])
  if (isLoading) {
    return (<p>Loading...</p>)
  }
  if (isError) {
    return (<p>Some Error occured</p>)
  }
  return (
    <Navigate to={`/drips/poll/${firstUnansweredIndex + 1}`} />
  )
}

export default PollsRedirect