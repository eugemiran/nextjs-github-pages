const applyInterceptors = (client: any) => {
  client.interceptors.request.use((config: any) => {
    const { headers } = config
    config.headers = {
      ...headers,
      // Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2NTk1ZjIyMi0zMjliLTRiNWYtYjQ0OC01NWZhNDlmNjBhZTUiLCJ1c2VyX2lkIjo0NTM3LCJlbWFpbCI6ImV1Z2VuaWEubWlyYW5kYUByb290c3RyYXAuY29tIiwidXNlcm5hbWUiOiJldWdlbmlhLm1pcmFuZGFAcm9vdHN0cmFwLmNvbSIsIm9yaWdfaWF0IjoxNjk3MDQ5MzY4fQ.jefU2E20c8jRLpWwUDNrBt451-EgdrsCuIFtcfg4bMQ`
    }
    return config
  })

  client.interceptors.response.use(
    async (response: any) => {
        // console.log(response)
      return response
    },
    (error: any) => Promise.reject(error)
  )
}

export default applyInterceptors
