/*

activity = {
    'name': string,
    'date': Date,
    'chemical': 'Serotonin' | 'Dopmaine' | 'Oxytocin' | 'Endorphins'
}

activites = activity[]

*/

const Activites = ({ activities }) => {
    if (activities) {
        return (
            <div className="flex flex-col">
                <h2 className="font-bold text-3xl pb-5">Activities</h2>
                <ul className="">
                    {activities.map((value, index) => {
                        return (
                            <li className="border-2 border-gray-100 p-3 rounded mb-5">
                                <div className="flex justify-between">
                                    <h2>{value.name}</h2>
                                    <span className="text-gray-400 uppercase text-xs">{value.date}</span>
                                </div>
                                <span>Hormone: {value.chemical}</span>
                            </li>
                        )
                    })}
                </ul>
                <button className="py-2 px-5 bg-blue-100 mt-5 rounded text-gray-900">Enter an activity for today</button>
            </div>
        )
    } else {
        return (
            <div className="flex border-2 border-gray-100 p-10 rounded">
                <span>No activites done today</span>
            </div>
        )
    }
}

export default Activites