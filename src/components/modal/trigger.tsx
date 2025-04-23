'use client'

import { useSearchParams } from "next/navigation"
import Modal from "."
import { Suspense } from "react"

function ModalContent() {
  const params = useSearchParams()
  const modalOpen: boolean = (params.get('modal') ?? false) as boolean
  const projectId = params.get('project-id')

  if (modalOpen && projectId) {
    return <Modal projectId={projectId} />
  }

  return null
}

export default function ModalTrigger() {
  return (
    <Suspense fallback={null}>
      <ModalContent />
    </Suspense>
  )
}