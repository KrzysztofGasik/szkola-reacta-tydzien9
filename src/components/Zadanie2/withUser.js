import React,{useContext} from 'react'
import UserContext from './UserContext'

function withUser(WrappedComponent) {

   return (props)=> {
       const {email,isAdmin} = useContext(UserContext);
       return <WrappedComponent {...props} email={email} isAdmin={isAdmin} />
   }
}

export default withUser;