const app_url = 'http://localhost:3000'

export default {
    add : async (task) => {
        
        const route = '/task'
        const req_url = app_url + route

        const data = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        }

        const response = await fetch(req_url,data)
        const json = await response.json()

        return json
        
    },
    getAll : async () => {

        const route = '/task'
        const req_url = app_url + route
      
        const data = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        }
        
        const response =  await fetch(req_url, data)
        const json = await response.json()
  
        return json
      },
      deleteById : async (id) => {

        const route = '/task'
        const req_url = app_url + route
      
        const data = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id })
        }
        
        const response =  await fetch(req_url, data)
        return response
  
      }
}