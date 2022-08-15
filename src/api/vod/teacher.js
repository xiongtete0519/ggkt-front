import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
	//讲师列表:当前页，每页记录数，条件
    pageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/findQueryPage/${current}/${limit}`,
            method: `post`,
            //json格式传递  写法: data:searchobj
            //普通格式传递   写法:params:searchobj
            data: searchObj
        })
    },
  //讲师删除
  removeTeacherId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: `delete`
    })
  },
  //讲师添加
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/saveTeacher`,
      method: `post`,
      data: teacher
    })
  },
  //根据id查询
  getTeacherById(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: `get`
    })
  },
  //讲师修改
  updateTeacher(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: `post`,
      data: teacher
    })
  },
  //批量删除
  batchRemove(idList) {
    return request({
      url: `${api_name}/removeBatch`,
      method: `delete`,
      data: idList
    })
  },
}
