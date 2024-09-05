import { assert, expectTypeOf, test } from 'vitest'
import { Habit } from './habit'

test('create a Habit', () => {

    const habit = new Habit({
        name: 'Meditation'
    })

    assert.instanceOf(habit, Habit)
})

test('Complete a day in Habit', () => {
    const habit = new Habit({
        name: 'Meditation'
    })

    const today = new Date()

    habit.setDayCompleted(today)

    expectTypeOf(habit.daysCompleted).items.toEqualTypeOf<Date>()
})

test('Cannot complete a day two times in Habit', () => {
    const habit = new Habit({
        name: 'Meditation'
    })

    const today = new Date()

    habit.setDayCompleted(today)

    assert.throws(() => habit.setDayCompleted(today))
})

test('Can complete two different habits in a day', () => {
    const habit_1 = new Habit({
        name: 'Meditation'
    })

    const habit_2 = new Habit({
        name: 'Drink water'
    })

    const today = new Date()

    habit_1.setDayCompleted(today)
    habit_2.setDayCompleted(today)

    assert.instanceOf(habit_1, Habit)
    assert.instanceOf(habit_2, Habit)
})