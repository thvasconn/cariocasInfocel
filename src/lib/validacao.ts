export type CamposContato = {
  nome: string
  telefone: string
  mensagem: string
}

export type ErrosContato = Partial<Record<keyof CamposContato, string>>

/** Deixa só os dígitos e formata como (21) 99999-8888 enquanto a pessoa digita. */
export function formatarTelefone(valor: string): string {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export function validarContato(campos: CamposContato): ErrosContato {
  const erros: ErrosContato = {}

  if (campos.nome.trim().length < 3) {
    erros.nome = 'Escreva seu nome completo.'
  }

  const digitos = campos.telefone.replace(/\D/g, '')
  if (digitos.length < 10 || digitos.length > 11) {
    erros.telefone = 'Informe DDD e número, como (21) 99999-8888.'
  }

  if (campos.mensagem.trim().length < 10) {
    erros.mensagem = 'Conte um pouco mais — pelo menos 10 caracteres.'
  }

  return erros
}
