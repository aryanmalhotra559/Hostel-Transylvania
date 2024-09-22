import React from 'react'
import Navsecond from '@/components/NavSecond'

const StudentSignupLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navsecond/>
            <main>
                {children}
            </main>
        </body>
    </html>

  )
}

export default StudentSignupLayout