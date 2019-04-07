export interface Movie {
  overview: string;
  popularity: number
  poster_path: string
  release_date: string;
  title: string;
  vote_average:  number;
  results: any;
  youHaveVoted: boolean;
  numberOfStars: any[];
  whenStarClicked: boolean

  showWhenVote: boolean
  numberOfVotes: number
}
