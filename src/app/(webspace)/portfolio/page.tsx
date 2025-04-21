import PortfolioPageContainer from '@/containers/portfolio'
import React from 'react'

type Props = {
  searchParams: {
    "project-category": string
  }
}

export default async function PortfolioPage(props: Props) {
  const { searchParams } = await props;

  return <PortfolioPageContainer projectCategory={searchParams['project-category']} />
}