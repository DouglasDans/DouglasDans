import PortfolioPageContainer from '@/containers/portfolio'
import React from 'react'

type Props = {
  searchParams: {
    "project-category": string
  }
}

export default function PortfolioPage(props: Readonly<Props>) {
  const { searchParams } = props;

  return <PortfolioPageContainer projectCategory={searchParams['project-category']} />
}