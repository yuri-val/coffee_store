import apiClient from './apiClient'

const resource = '/coffee'

export default {
  index: () => apiClient.get(resource)
}
