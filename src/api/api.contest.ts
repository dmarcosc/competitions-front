/**
 * APIs relacionada con el usuario y cliente.
 *
 * Se devuelve un objeto con las llamadas.
 */
import { xhr } from './config/repository'

export default {
  /**
    * login del usuario
    * @param email - email usuario
    * @param password - password de usuario
    */
  async login (email: string, password: string) {
    const url = '/api/login'
    const headers = {
      'Content-Type': 'application/json'
    }
    const body = {
      email,
      password
    }
    return xhr.post(url, body, { headers })
  }

}
