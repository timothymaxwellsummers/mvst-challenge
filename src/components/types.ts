
// Type for a single repository
export interface Repository {
    name: string;
    description: string | null;
    language: string | null;
    license: string | null;
    lastUpdated: Date;
  }
  
  // Type for the GitHub profile
  export interface Profile {
    username: string;
    name: string | null;
    avatarUrl: string;
    githubUrl: string;
    followers: number;
    following: number;
  }
  
  // Type for the entire GitHub data response
  export interface GitHubData {
    profile: Profile;
    repositories: Repository[];
  }
  