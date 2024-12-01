import { useEffect } from "react";

// export function useClickOutside(
// 	ref: React.RefObject<HTMLElement>,
// 	callback: () => void
// ) {
// 	useEffect(() => {
// 		const handleClickOutside = (event: MouseEvent) => {
// 			if (ref.current && !ref.current.contains(event.target as Node)) {
// 				callback()
// 			}
// 		}

// 		document.addEventListener('click', handleClickOutside)

// 		return () => {
// 			document.removeEventListener('click', handleClickOutside)
// 		}
// 	}, [ref, callback])
// }
   
export function useClickOutside(
	ref: React.RefObject<HTMLElement>,
	callback: () => void
) {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})
}