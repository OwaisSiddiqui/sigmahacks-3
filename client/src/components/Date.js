const DateSection = ({ date }) => {
    if (date) {
        return (
            <>
                <h2 className="text-2xl">{date}</h2>
            </>
        )
    } else {
        return (
            <>
                <h2>No date is given</h2>
            </>
        )
    }
}

export default DateSection