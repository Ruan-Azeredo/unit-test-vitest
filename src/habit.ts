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

    public setDayCompleted = (date: Date) => {
        this.daysCompleted.push(date)
    }
}