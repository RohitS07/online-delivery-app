// @vitest-environment node
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const css = readFileSync(new URL('./index.css', import.meta.url), 'utf8')

describe('stylesheet (US-0002)', () => {
  // AC-0002-07
  it('loadsTailwindWithoutDemoTheme', () => {
    expect(css).toMatch(/^@import ['"]tailwindcss['"];/m)
    for (const demo of ['--accent', '--social-bg', '--code-bg', '#aa3bff', '#counter', '.hero']) {
      expect(css).not.toContain(demo)
    }
  })
})
