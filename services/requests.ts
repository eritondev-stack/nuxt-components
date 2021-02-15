
import axios from 'axios'

class Requests { 
  async getUsers(): Promise<any[]>{
  const data = await axios.get('https://reqres.in/api/users?page=2')
  return data.data.data
  }
}

export default new Requests()
