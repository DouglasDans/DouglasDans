import PortfolioPageContainer from '@/containers/portfolio'
import React from 'react'

type Props = {
  searchParams: Promise<{
    "project-category": string
  }>
}

export default async function PortfolioPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const projectCategory = resolvedParams["project-category"]

  return <PortfolioPageContainer projectCategory={projectCategory} />
}