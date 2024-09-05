export class Connection {
    public async callApi(): Promise<() => []> {
        try {
            const data = await (await fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')).json()
            return data
        } catch (error) {
            throw new Error('Error trying to call the api')
        }
    }
}
