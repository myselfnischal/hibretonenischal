import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Loading from '../../components/elements/Loading';
import Layout from '../../components/Layout/Layout';
import CourseDetailsArea from './Details/CourseDetailsArea';

function CourseDetails () {

  const router = useRouter()
  const courseId = router.query.courseId
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoadPage = async () => {
      if (courseId) {
        try {
          const response = await axios.get(`/alison-courses/course/${courseId}`)
          setData(response.data.data)
        } catch (error) {
          console.error('Error fetching course data:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    handleLoadPage()
  }, [courseId])

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    )
  }

  return (
    <Layout>
      <CourseDetailsArea courseData={data} />
    </Layout>
  )
}

export default CourseDetails
