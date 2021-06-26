import goalsCSS from './goals.css'

/*

goal = {
    'chemical': 'Serotonin' | 'Dopmaine' | 'Oxytocin' | 'Endorphins',
    'number': number
}

goals = goal[]

*/

const Goals = ({ goals }) => {
    if (goals) {
       return (
            <div className="flex flex-col">
                <h2 className="font-bold text-3xl pb-5">Goals</h2>
                <ul>
                    {goals.map((value, index) => {
                        return (
                            <li className="mb-5">
                                <div className="flex flex-col">
                                    <label for="chemical" className="pb-2">{value.chemical}</label>
                                    <progress value={value.number} max={10} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
       )
    } else {
        return (
           <>
                <h2 className="font-bold text-3xl pb-5">Goals</h2>
                <div className="flex border-2 border-gray-100 p-10 rounded">
                    <span>No goals</span>
                </div>
           </>
        )
    }
    return (
        <>
            <h2>Goals</h2>
        </>
    )
}

export default Goals