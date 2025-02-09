export interface Article {
    title: string
    dateRange: string
    place: string
    description?: string
}

export interface Project {
    title: string
    description: string
    technologies: string[]
    show?: boolean
}

