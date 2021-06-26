import DateSection from '../components/Date'
import Activites from '../components/Activities'
import Goals from '../components/Goals'
import Navbar from '../components/Navbar'
import { useState } from 'react'

const DAYS_OF_THE_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const App = () => {

    const getDateString = (date) => {
        return `${DAYS_OF_THE_WEEK[date.getDay() - 1]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }

    const [date, setDate] = useState(getDateString(new Date()))

    const prevDate = () => {

    }

    const nextDate = () => {

    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex items-center justify-center flex-col flex-1">
                <DateSection date={date}/>
                <hr className="my-5 border-1 border-black w-full"/>
                <div className="flex">
                    <Activites activities={[
                        {
                            'name': 'Biking',
                            'date': 'Today',
                            'chemical': 'Oxytocin'
                        },
                        {
                            'name': 'Walking',
                            'date': 'Today',
                            'chemical': 'Oxytocin'
                        },
                        {
                            'name': 'Medidate',
                            'date': 'Today',
                            'chemical': 'Serotonin'
                        },
                        {
                            'name': 'Cook',
                            'date': 'Today',
                            'chemical': 'Endorphins'
                        }
                    ]}/>
                    <div className="ml-10">
                        <Goals goals={[
                            {
                                'chemical': 'Oxytocin',
                                'number': 2
                            },
                            {
                                'chemical': 'Serotonin',
                                'number': 1
                            },
                            {
                                'chemical': 'Dopmaine',
                                'number': 0
                            },
                            {
                                'chemical': 'Endorphins',
                                'number': 1
                            },
                        ]}/>
                    </div>
                </div>
                <div className="flex mt-10">
                    <button className="rounded border-2 border-gray-100 px-5 py-2 mr-5">prev</button>
                    <button className="rounded border-2 border-gray-100 px-5 py-2">next</button>
                </div>
            </div>
        </div>
    )
}

export default App