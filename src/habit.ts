interface HabitProps{
    name: string,
}

export class Habit {

    public name: string
    public daysCompleted: Date[]

    constructor(props: HabitProps) {
        this.name = props.name
        this.daysCompleted = []
    }

    public setDayCompleted = (date: Date) : void => {

        if(this.daysCompleted.includes(date)){
            throw new Error("This habit already was compleated in this day")
        }

        this.daysCompleted.push(date)
    }
}