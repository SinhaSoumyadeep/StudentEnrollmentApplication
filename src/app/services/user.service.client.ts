export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  login(username, password){

    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login',
      {
        body: JSON.stringify(credentials),
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json());
  }

  logout()
  {
    return fetch('http://localhost:4000/api/logout',
      {
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then((response) => {response.json()} );
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  createSection(name,seats,courseId)
  {
    const section = {
      name: name,
      seats: seats,
      courseId: courseId
    };
    return fetch('http://localhost:4000/api/course/'+ courseId +'/section', {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });


  }

  findSectionsForCourse(courseId)
  {
    return fetch('http://localhost:4000/api/course/'+ courseId +'/section',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId)
  {

    return fetch('http://localhost:4000/api/section/'+ sectionId +'/enrollment', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then( response => response.json());
  }

  unenrollStudentInSection(sectionId)
  {

    return fetch('http://localhost:4000/api/section/'+ sectionId +'/unenrollment', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then( (response) => {response.json()});
  }


  findSectionsForStudent()
  {
    return fetch('http://localhost:4000/api/student/section',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  findEnrollmentForSection(sectionId)
  {
    return fetch('http://localhost:4000/api/section/'+sectionId+'/findenrollment',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }



  updateUser(user) {

    console.log(user)
    return fetch('http://localhost:4000/api/updateuser', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {response.json()});
  }

  updateSection(section){
    console.log(section)
    return fetch('http://localhost:4000/api/updatesection', {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  }

  deleteSection(sectionId){

    return fetch('http://localhost:4000/api/delete/'+sectionId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {response.json()});
  }

  findAllUsers()
  {
    return fetch('http://localhost:4000/api/user',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

}
