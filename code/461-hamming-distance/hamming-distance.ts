export function hammingDistance(x: number, y: number): number {
    return (x ^ y).toString(2).split('').filter(item => item === '1').length
}
