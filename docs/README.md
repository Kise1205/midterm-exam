># Full Stack Tech Exam - Readme Template

**Name:** [Thuan Nguyen]

## 🔗 Required Links

| Component | Link | 
|-----------|------|
| **GitHub Repository** | [https://github.com/Kise1205/midterm-exam](https://github.com/Kise1205/midterm-exam) | 
| **GitHub Pages (docs/)** | [https://kise1205.github.io/midterm-exam/](https://kise1205.github.io/midterm-exam/) | 
| **Dev Server (Render)** | [https://midterm-exam-oph4.onrender.com/](https://midterm-exam-oph4.onrender.com/) | 
| **Production Server (GCP)** | [http://8.228.16.219](http://8.228.16.219)) | 
| **Issue** | [https://github.com/Kise1205/midterm-exam/issues/1](https://github.com/Kise1205/midterm-exam/issues/1) | 
| **Pull Request** | [https://github.com/Kise1205/midterm-exam/pull/2/](https://github.com/Kise1205/midterm-exam/pull/2/) | 
| **Milestone** | [https://github.com/Kise1205/midterm-exam/milestone/1?closed=1](https://github.com/Kise1205/midterm-exam/milestone/1?closed=1) | 
| **Successful CI/CD Action** | [https://github.com/Kise1205/midterm-exam/actions/runs/23019716959/job/66853759498](https://github.com/Kise1205/midterm-exam/actions/runs/23019716959/job/66853759498) | 
| **ssh cmd to your gcp** | `ssh -i student-key bcumbie@8.228.16.219` | 

---

# Full Stack Tech Exam Instructions

>Starting with a given codebase (provided as a GitHub repository), 
>configure and develop a full stack infrastructure and app. 

## Requirements 
> for the sake of time, you may can approach these steps in the order you choose. 

### 1️⃣ access the codebase
- using the [stater code base repository](https://github.com/barrycumbie/full-stack-tech-exam)
- bring the code into your own repository via `fork` `import` or `copy/paste`

### 2️⃣ configure your repository
- set up a GitHub Pages deployment pointing to `docs/`
- include the link in the `About`
- ensure the GitHub Pages shows your `README` 
  
### 3️⃣ modify the codebase
- take the steps to get the `Node.js` app working (suggest locally)
- an endpoint to serve front end html via a `public/` directory
- `public` is organized with no internal `scripts` or `styles` (use directories)
- an `input` to submit a user name
- a `dom` element to receive a response from the server
- upgrade the front end with `html` & `styles` to guide a user what is going on
- for the server `app.mjs` ensure the correct packages are installed, imported, & available
- refactor the front end `html` from a `<form>` to use the `js fetch()`
- environmental variables with a provided `mongodb` connection string 
- endpoints (middlewares)
	- input an emoji for a given username (no front end required, see code comments)
	- serve a static `html` from `public/` (`get to slash`)
	- receive user input & return a response
- include in the `README` links to your production server `http://static.external.gcp.ip`

### 4️⃣ set up a `dev` server
- create a `dev` branch & a dev server
- include the link in your `README`

### 5️⃣ set up a `gcp` `compute engine` `vm instance`
- config = firewall `http` & `https`, `static external ip` & requisite `ssh` public keys (including the `student-key.pub`)

`student-key.pub # available on canvas`

- `ssh` into the the vm `instance` 
- update the `OS` & install the needed packages
- initialize your repository (`git clone` in proper directory)
- set up your `nginx` `reverse-proxy`
- (test your app using a `node` cmd)
- run your app with a production-grade process manager 
- getting app errors, try `pm2 loggs -n 50`

###  6️⃣ set up `ci/cd` on the `main` branch
- use a `.github/workflows/` `.yaml` file
- ensure use of `Git Hub action` `env` `secrets` & `variables`
- create a milestone called `full stack tech exam`
- test `ci/cd` with an `issue` & `pull request` 
	- ensure the two are linked
	- assign both the issue and pull request to the `full stack tech exam` milestone
	- assign both to yourself 
- include described links on your `readme` to 
	- the `issue`, `pull request`, `milestone` & successful `action`

## Submission
- a link to your repository. 
