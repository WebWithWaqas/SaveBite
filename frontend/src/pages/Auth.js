import React, { useState } from 'react'
import http from '../api';

export const Auth = ({ updateUser }) => {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState({})

  const login = () => {
    http.post('/v1/auth/login', user).then(res => {
      window.localStorage.setItem("token", res.data.token.accessToken);
      window.localStorage.setItem("user", JSON.stringify(res.data.user));
      http.refreshToken();
      updateUser(res.data.user);
    }).catch(err => {
      alert("Invalid Credentials");
    })
  }



  const signup = () => {
    http.post('/v1/auth/register', user).then(res => {
      alert("Signup Successful");
      setPage(0);
    }).catch(err => {
      alert("Another user has already registered with this email");
    })
  }
  const greeting = () => {
    console.log("working");
  }
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          console.log("trigger");
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  return (
    <>
      { page === 0 &&
      <div className="row" >
      <div className="col-lg-4 col-md-6 col-sm-12 center p-4 mt-5" style={{margin: '0 auto'}}>
        <form className="needs-validation" novalidate>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <div class="invalid-feedback">
              Please Enter valid Email
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={login}>
            Login
        </button>
          <div id="emailHelp" class="form-text">
            <p className="mt-3 text-center">
              Don't have an account? <span onClick={() => setPage(1)}><span className="auth-primary-text">Sign up</span></span>
            </p>
          </div>
        </form>
      </div>
      </div>
      }

      { page === 1 && <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 center p-4 mt-5" style={{margin: '0 auto'}}>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={() => { signup(); }}>
            {/* <button type="button" class="btn btn-primary" onClick={signup}> */}
            Signup
        </button>
          <div id="emailHelp" class="form-text">
            <p className="mt-3 text-center">
              Already have an account? <span onClick={() => setPage(0)}><span className="auth-primary-text">Login</span> </span>
            </p>
          </div>
        </form>
      </div>
      </div>}
    </>
  );
}
