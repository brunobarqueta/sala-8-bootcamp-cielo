export const Types = {
    LIST_REQUIRED: "list_required",
    LIST_FAILURE: "list_failure",
    LIST_SUCCESS: "list_success",
}

export const listRequired = () => ({
    type: Types.LIST_REQUIRED
})

export const listFailure = (payload) => ({
    type: Types.LIST_FAILURE,
    payload
})

export const listSuccess = (payload) => ({
    type: Types.LIST_SUCCESS,
    payload
})