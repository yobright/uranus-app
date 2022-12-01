import React from 'react'

const Signup = () => {
  return (
    <div>
        
    </div>
  )
}

export default Signup


// username (unique)
// password (min=8, max=16, needs=(aB1@)¹)
// name 
// surname
// nom de connexion **** (==! username) (input validation => unicité (db?))
// email (unique) (unicité db?)  
// groupe (?env)

// onSubmit 
//    - send mail to user email (data = user password)