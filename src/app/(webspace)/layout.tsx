import React, { Fragment, PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <nav></nav>
      {children}
    </Fragment>
  )
}