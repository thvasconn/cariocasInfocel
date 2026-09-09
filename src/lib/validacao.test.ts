import assert from 'node:assert/strict'
import { formatarTelefone, validarContato } from './validacao'

assert.equal(formatarTelefone('21'), '21')
assert.equal(formatarTelefone('2199'), '(21) 99')
assert.equal(formatarTelefone('2133332211'), '(21) 3333-2211')
assert.equal(formatarTelefone('21999998888'), '(21) 99999-8888')
assert.equal(formatarTelefone('(21) 99999-8888 99'), '(21) 99999-8888')
assert.equal(formatarTelefone('abc'), '')

const validos = {
  nome: 'Maria Silva',
  telefone: '(21) 99999-8888',
  mensagem: 'Queria saber o preço da troca de tela do iPhone 13.',
}
assert.deepEqual(validarContato(validos), {})

const erros = validarContato({ nome: 'Jo', telefone: '2199', mensagem: 'oi' })
assert.ok(erros.nome && erros.telefone && erros.mensagem)

// Fixo de 10 dígitos também é telefone válido.
assert.equal(validarContato({ ...validos, telefone: '(21) 3333-2211' }).telefone, undefined)

console.log('validacao: ok')
