import { writable } from 'svelte/store'
import { Themes } from './constants'

export const theme = writable(Themes.Light)
