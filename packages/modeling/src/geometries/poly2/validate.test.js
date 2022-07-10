const test = require('ava')

const { validate, create, toString, toPoints } = require('./index')

test('validate: identifies polygons', (t) => {
  const ply1 = create()
  t.throws(() => validate(ply1), { message: 'poly2 not enough vertices 0' })

  const ply2 = create([[0, 0], [1, 0], [1, 1]])
  t.notThrows(() => validate(ply2))

  //const string = toString(ply2)
  //const points = toPoints(ply2)

  // Clockwise
  const ply3 = create([[5, 5], [5, -5], [-5, -5], [-5, 5]])
  t.throws(() => validate(ply3), { message: 'poly2 area must be greater than zero' })

  // Counter Clockwise
  const ply4 = create([[5, 5], [-5, 5], [-5, -5], [5, -5]])
  t.notThrows(() => validate(ply4))

  // CCW With V-side
  const ply5 = create([[5, 5], [-5, 5], [0, 0], [-5, -5], [5, -5]])
  t.notThrows(() => validate(ply5))

  // STAR
  const ply6 = create([[0, 0], [5, 5], [5, -5], [0, 0], [-5, -5], [-5, 5]])
  t.throws(() => validate(ply6), { message: 'poly2 area must be greater than zero' })

  // Counter Clockwise with duplicate points
  const ply7 = create([[5, 5], [-5, 5], [-5, 5], [-5, -5], [5, -5]])
  t.throws(() => validate(ply7), { message: 'poly2 duplicate vertex at 1: [-5,5]' })
})
