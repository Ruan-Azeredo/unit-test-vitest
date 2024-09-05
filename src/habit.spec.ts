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