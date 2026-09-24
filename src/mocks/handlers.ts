import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:3000/api', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
]
