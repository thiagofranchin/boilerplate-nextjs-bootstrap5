import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Error } from '@styled-icons/boxicons-solid/Error'

import * as S from '../styles/notFound'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [router])

  return (
    <S.WrapperNotFound>
      <Error width="70" className="text-danger mb-4" />
      <h1 className="text-info mb-3">
        Oooopssss... <span className="text-danger">404!</span>
      </h1>
      <h3 className="mb-4">That page cannot be found.</h3>
      <p>
        Go back to the{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </S.WrapperNotFound>
  )
}

export default NotFound
