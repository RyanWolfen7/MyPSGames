export interface DataResponse {
  
}

export default interface LoginInterface {
  isLoading: boolean,
  data: DataResponse,
  error: Error | null
}
