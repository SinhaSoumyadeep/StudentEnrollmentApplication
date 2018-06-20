export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  profile() {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/profile',
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/login',
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/logout',
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/user', {
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/course/'+ courseId +'/section', {
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/course/'+ courseId +'/section',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId)
  {

    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/section/'+ sectionId +'/enrollment', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then( response => response.json());
  }

  unenrollStudentInSection(sectionId)
  {

    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/section/'+ sectionId +'/unenrollment', {
      credentials: 'include', // include, same-origin, *omit
    })
      .then( (response) => {response.json()});
  }


  findSectionsForStudent()
  {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/student/section',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  findEnrollmentForSection(sectionId)
  {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/section/'+sectionId+'/findenrollment',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }



  updateUser(user) {

    console.log(user)
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/updateuser', {
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
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/updatesection', {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

  }

  deleteSection(sectionId){

    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/delete/'+sectionId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {response.json()});
  }

  findAllUsers()
  {
    return fetch('https://enigmatic-basin-76680.herokuapp.com/api/user',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

}
