Agents
    [] List agents abilities and their durations/costs;

Map
    [x] dropdown for map selection
    [x] map points on image
    [] map agent abilities icon on image dependent on line up


Twitter
    [] Twitter feed per pro team
    [] Twitter feed for leakers
    [] Twitter feed for team news reporters

Reddit
   [] Link to r/valorant r/valorantcompetitive r/agentacademy

[] Use Agent Image in Background;
[] BP Calculator?
[] pagination for lineups


List of Line ups

Filter by: 
    agent
    side
    map

agent object
    {
        id,
        name,
        abilities: ability[]
    }


Line up object
    {
        id: number | string,
        createAt: date,
        title: string,
        agent: string,
        side: string,
        map: string,
        deprecated: boolean,
        coordinates: any[]
        ability: string,
        credit: creator[],
        media: {
            image: string[],
            video: string
        }
    }
