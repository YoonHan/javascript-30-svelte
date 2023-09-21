/**
 * Check if codes run on server side
 */
export const isServer = () => typeof window === 'undefined'


/**
 * Check if codes run on client side
 */
export const isClient = () => typeof window !== 'undefined'