import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  private moviesToRate: any[] = [
    {
      overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      totalScore: 0,
      poster_path: "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
      release_date: "1995-10-20",
      title: "Dilwale Dulhania Le Jayenge",
      vote_average: 9,
      youHaveVoted: false,
      numberOfStars: [],
      whenStarClicked: true,

      numberOfVotes: 0,
      showWhenVote: false,
    },
    {
      overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      totalScore: 0,
      poster_path: "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
      release_date: "1994-09-23",
      title: "The Shawshank Redemption",
      vote_average: 8.7,
      youHaveVoted: false,
      numberOfStars: [],
      whenStarClicked: true,
      numberOfVotes: 0,

      showWhenVote: true,
    },
    {
      overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      totalScore: 0,
      poster_path: "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      vote_average: 8.6,
      youHaveVoted: false,
      numberOfStars: [],
      whenStarClicked: true,
      numberOfVotes: 0,

      showWhenVote: false,
    }
  ]
  private ratedMovies: any[] = [
    // {
    //   overview: "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    //   totalScore: 0,
    //   poster_path: "/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
    //   release_date: "1995-10-20",
    //   title: "Dilwale Dulhania Le Jayenge",
    //   vote_average: 9,
    //   youHaveVoted: false,
    //   numberOfStars: [1,2,34,5,66,7,8,9],
    //   whenStarClicked: true,
    //
    //   numberOfVotes: 0,
    //   showWhenVote: false,
    // },
    // {
    //   overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    //   totalScore: 0,
    //   poster_path: "/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    //   release_date: "1994-09-23",
    //   title: "The Shawshank Redemption",
    //   vote_average: 8.7,
    //   youHaveVoted: false,
    //   numberOfStars: [1],
    //   whenStarClicked: true,
    //   numberOfVotes: 0,
    //
    //   showWhenVote: true,
    // },
    // {
    //   overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    //   totalScore: 0,
    //   poster_path: "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    //   release_date: "1972-03-14",
    //   title: "The Godfather",
    //   vote_average: 8.6,
    //   youHaveVoted: false,
    //
    //   whenStarClicked: true,
    //   /*Vote*/
    //   numberOfVotes: 0,
    //   numberOfStars: [],
    //   /*Vote*/
    // }
  ]
  getMoviesToRate(){
    return this.moviesToRate;
  }
  getRatedMovies(){
    return this.ratedMovies;
  }
  constructor() { }
}
