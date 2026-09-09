import { motion } from 'framer-motion'
import type { Produto } from '../../data/produtos'
import { ProdutoCard } from './ProdutoCard'

const grade = {
  oculto: { opacity: 0 },
  visivel: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  oculto: { y: 24, opacity: 0 },
  visivel: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } },
}

/** Grade de produtos com entrada escalonada quando aparece na tela. */
export function GradeProdutos({ produtos }: { produtos: Produto[] }) {
  return (
    <motion.div
      variants={grade}
      initial="oculto"
      whileInView="visivel"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {produtos.map((produto) => (
        <motion.div key={produto.id} variants={item}>
          <ProdutoCard produto={produto} />
        </motion.div>
      ))}
    </motion.div>
  )
}
