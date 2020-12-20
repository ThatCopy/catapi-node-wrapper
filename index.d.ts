/**
 * Returns a random cat.
 *
 * @return {Promise<object>} Object - docs https://catapi.thatcopy.pw/docs.html
 *
 * @example
 *     console.log(await random())
*/

export function random(): Promise<object>;

/**
 * Search for cat by id.
 * 
 * @param {number} id - The id (_id)
 *
 * @return {Promise<object>} Object - docs https://catapi.thatcopy.pw/docs.html
 *
 * @example
 *     console.log(await id(3))
*/

export function id(id: number): Promise<object>;
