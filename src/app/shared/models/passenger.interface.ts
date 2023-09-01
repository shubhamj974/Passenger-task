export interface Ipassenger {
    id: number,
    fullname: string
    checkedIn: boolean
    checkInDate: number | null
    children: Array<Ichild> | null
}

interface Ichild {
    name: string
    age: number
}