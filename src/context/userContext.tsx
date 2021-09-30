import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from 'react'

import { toast } from 'react-toastify'

interface UserProps {
    id: number
    email: string
    img: string
}

interface UserContextProps {
    user: UserProps[]
}

const UserContext = createContext<UserContextProps>({} as UserContextProps)

type UserContextProviderProps = {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
