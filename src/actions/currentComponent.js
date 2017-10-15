export const SELECT_COMPONENT   = "SELECT_COMPONENT"

export const selectComponent = (el) => {
	return {
		type: SELECT_COMPONENT,
		el
	}
}