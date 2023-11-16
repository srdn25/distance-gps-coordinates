type Point = {
    lat: number;
    lon: number;
};
/**
 * Return distance in meters between coordinates
 *
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance in meters between coordinates
 */
export declare function calculateDistance(pointA: Point, pointB: Point): number;
export {};
