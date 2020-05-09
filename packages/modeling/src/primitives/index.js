/**
 * Hello this is about primitives.
 * @module modeling/primitives
 */
module.exports = {
  arc: require('./arc'),
  circle: require('./ellipse').circle,
  cube: require('./cuboid').cube,
  cuboid: require('./cuboid').cuboid,
  cylinder: require('./cylinderElliptic').cylinder,
  cylinderElliptic: require('./cylinderElliptic').cylinderElliptic,
  ellipse: require('./ellipse').ellipse,
  ellipsoid: require('./ellipsoid').ellipsoid,
  geodesicSphere: require('./geodesicSphere'),
  line: require('./line'),
  polygon: require('./polygon'),
  polyhedron: require('./polyhedron'),
  rectangle: require('./rectangle').rectangle,
  roundedCuboid: require('./roundedCuboid'),
  roundedCylinder: require('./roundedCylinder'),
  roundedRectangle: require('./roundedRectangle'),
  sphere: require('./ellipsoid').sphere,
  square: require('./rectangle').square,
  star: require('./star'),
  torus: require('./torus')
}