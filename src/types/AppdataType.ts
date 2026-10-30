export interface TAppProps {
  image: string
  title: string
  companyName: string
  id: number
  description: string
  size: number
  reviews: number
  ratingAvg: number
  downloads: number
  ratings: TRating[]
}

export interface TRating {
  name: string
  count: number
}