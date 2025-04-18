import PortfolioPageContainer from '@/containers/portfolio'
import React from 'react'

type Props = {
  searchParams: {
    "project-category": string
  }
}

export default function PortfolioPage({ searchParams }: Readonly<Props>) {
  return <PortfolioPageContainer projectCategory={searchParams['project-category']} />
}