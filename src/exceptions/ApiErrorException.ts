class ApiError {
  message!: string | string[]
  status!: number
  additionalInfo!: any

  constructor(message: string | string[], status: number = 500) {
    this.message = message
    this.status = status
  }
}

export default ApiError
