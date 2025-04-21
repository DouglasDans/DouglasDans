import PortfolioPageContainer from '@/containers/portfolio'
import React from 'react'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function PortfolioPage({ searchParams }: Props) {
  return <PortfolioPageContainer projectCategory={searchParams['project-category'] as string} />
}