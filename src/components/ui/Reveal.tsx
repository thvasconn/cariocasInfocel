import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Atraso em segundos, para escalonar itens de uma mesma lista. */
  delay?: number
  /** Deslocamento vertical inicial, em pixels. */
  y?: number
}

/** Entrada suave quando o bloco aparece na tela. */
export function Reveal({ children, className, delay = 0, y = 24 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
