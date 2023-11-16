type Point = {
  lat: number,
  lon: number,
}

const earthRadiusMeters: number = 6371000;

function getRadian(coordinate: number): number {
  return coordinate * (Math.PI / 180);
}

function validatePoint(point: Point) {
  if (typeof point !== 'object' || !point.hasOwnProperty('lat') || !point.hasOwnProperty('lon')) {
    throw new Error('Point should be object, and contains "lat" and "lon" properties')
  }

  if (typeof point.lat !== 'number' || typeof point.lon !== 'number') {
    throw new Error('Point "lat" and "lon" properties should be a number');
  }

  return true;
}

/**
 * Return distance in meters between coordinates
 *
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance in meters between coordinates
 */
export function calculateDistance(pointA: Point, pointB: Point): number {
  validatePoint(pointA);
  validatePoint(pointB);

  const radianALat = getRadian(pointA.lat);
  const radianALon = getRadian(pointA.lon);
  const radianBLat = getRadian(pointB.lat);
  const radianBLon = getRadian(pointB.lon);

  const deltaLat = radianBLat - radianALat;
  const deltaLon = radianBLon - radianALon;

  const haversine = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(radianALat) * Math.cos(radianBLat) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const aTan = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  const distance = earthRadiusMeters * aTan;

  return Math.round(distance);
}