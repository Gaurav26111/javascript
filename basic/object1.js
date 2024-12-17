//   singleton
// const tinderUser = new Object()
// console.log(tinderUser)

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Gaurav"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "gaurav@gmail.com",
    full_name: {
        userfullname: {
            firstName: "Gaurav",
            latName: "Kumar"
        }
    }
}

// console.log(regularUser.full_name)
// console.log(regularUser.full_name.userfullname)
// console.log(regularUser.full_name.userfullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

//const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)//line 34 and 35 both are correct but line 35 is good proctice of writing code
// console.log(obj3)

// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    },
    {
        id: 1,
        email: "g@gmail.com"
    }
]
// console.log(user[0].id)
// console.log(user[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    courseName: "js in hindi",
    coursePrice: 999,
    courseInstructor: "Gaurav"
}

const {courseInstructor: Instructor} = course

console.log(Instructor)
