import { Sobre } from '#/components/sobre'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre')({
  component: Sobre,
})
