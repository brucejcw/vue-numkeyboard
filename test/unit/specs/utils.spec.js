import {
  closest
} from 'libs/utils'

describe('test utils', () => {
  it('should pass closest', () => {
    const div = document.createElement('div')
    const pDiv = document.createElement('div')
    const span = document.createElement('span')
    div.appendChild(span)
    pDiv.appendChild(div)
    expect(closest(span, 'div')).to.equal(div)
    expect(closest(span, 'div')).to.not.equal(pDiv)
    expect(closest(span, 'span')).to.equal(span)
  })
})