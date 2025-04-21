'use client'

import { useSearchParams } from "next/navigation"
import Modal from "."

type Props = {}

export default function ModalTrigger({ }: Props) {
  const params = useSearchParams()
  const modalOpen: boolean = (params.get('modal') ?? false) as boolean
  const projectId = params.get('project-id')

  if (modalOpen && projectId) {
    return <Modal projectId={projectId} />
  }
}