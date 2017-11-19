import Api from './Api'

export default {
  index () {
    return Api().get('api/v1/students')
  },

  create (student) {
    return Api().post('api/v1/students', student)
  },

  show (studentId) {
    return Api().get(`api/v1/students/${studentId}`)
  },

  update (studentId, student) {
    return Api().put(`api/v1/students/${studentId}`, student)
  },

  remove (studentId) {
    return Api().delete(`api/v1/students/${studentId}`)
  }
}
