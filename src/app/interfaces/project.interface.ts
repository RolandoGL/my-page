
export interface Project{
  id: number,
  puesto: string,

  activity: Activity[]
}

interface Activity{
  id?: number,
  sistema: string,
  description: string,
  router?: boolean,
  images?: string[]
}
