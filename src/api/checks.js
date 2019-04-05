import apiClient from './apiClient'

const resource = '/checks'

export default {
  create: (data) => apiClient.post(resource, data),
  createItem: (checkId, item) => apiClient.post(`${resource}/${checkId}/check_items`, item)
}
