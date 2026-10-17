// @vitest-environment node
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const app = new URL('../', import.meta.url)
const readJson = (name: string) => JSON.parse(readFileSync(new URL(name, app), 'utf8'))

describe('TypeScript (US-0003)', () => {
  // AC-0003-01
  it('noJavaScriptSourceLeft', () => {
    const files = readdirSync(new URL('src/', app), { recursive: true }).map(String)
    expect(files.filter((file) => /\.jsx?$/.test(file))).toEqual([])
  })

  // AC-0003-02
  it('tsconfigIsStrict', () => {
    expect(readJson('tsconfig.json').compilerOptions.strict).toBe(true)
  })

  // AC-0003-03. The Makefile half runs only inside the workspace.
  it('typecheckScriptRunsTsc', () => {
    expect(readJson('package.json').scripts.typecheck).toBe('tsc --noEmit')

    const makefile = new URL('../Makefile', app)
    if (existsSync(makefile)) {
      const make = readFileSync(makefile, 'utf8')
      expect(make).toMatch(/^typecheck:.*\btypecheck-app\b/m)
      expect(make).toMatch(/^typecheck-app:\n\t.*npm run --silent typecheck/m)
    }
  })
})
