export const SELECT_COMPONENT   = "SELECT_COMPONENT"

export const selectComponent = (componentType) => {
	return {
		type: SELECT_COMPONENT,
		componentType
	}
}