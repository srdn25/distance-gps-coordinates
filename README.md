# CalculateDistance

The function computes the distance in meters between two geographic coordinates
using the Haversine formula.
This formula is commonly employed to determine the great-circle distance between
two points on the surface of a sphere, such as the Earth.

## How It Works:
Earth Radius: The function uses the average radius of the Earth (6371 km) as the base unit for distance calculations.

Coordinate Conversion: Latitude and longitude coordinates are converted from degrees to radians for subsequent trigonometric calculations.

Differences in Coordinates: The differences in latitude (Δ lat) and longitude (Δ lon) between the two points are computed.

Haversine Formula Components: The Haversine formula is applied to compute two components,
`haversine` and `aTan`, which involve trigonometric operations using the differences in coordinates.

Central Angle: The central angle (θ) is determined using `haversine` and `aTan` in the Haversine formula.

Distance Calculation: The final distance between the two points on the sphere is calculated using the central angle and the Earth's radius.

## Example Usage

```javascript
const distance = calculateDistance({ lat: 51.5200, lon: 10.4050 }, { lat: 46.8566, lon: 3.3522 });
console.log(`Distance between coordinates: ${distance} meters`);
```