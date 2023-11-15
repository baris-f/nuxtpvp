import { User, Game, Match, Player } from "@/scripts/typesPvp"

export default function () {

  const profile = useState('profile', () => ({
    user: null as unknown as User,
    active: false,
    isPending: false,
  }))

  const showUserProfile = (user: User) => {
    if (profile.value.user?.id == user.id)
      profile.value.active = !profile.value.active
    else {
      profile.value.active = true
      profile.value.user = user
    }
  }

  const closeProfile = () => {
    profile.value.active = false
  }

  const match = useState('match', () => ({
    opponent: null as unknown as User,
    match: null as unknown as Match,
    selectedGame: null as unknown as Game,
    isRanked: false,
    isChallenged: false,
    isRefused: false,
    isStarted: false,
    isSearching: false,
    isOver: false
  }))

  const setMatchGame = (game: Game) => {
    match.value.selectedGame = game;
  }

  const setMatchOpponent = (user: User) => {
    match.value.opponent = user;
  }

  const getMatchOpponents = () => {
    return [match.value.opponent]
  }

  const matchRefused = () => {
    match.value.isRefused = true
  }

  const matchSearch = () => {
    match.value.isSearching = true
  }

  const matchStart = () => {
    match.value.isStarted = true
    match.value.isSearching = false
    match.value.match = {
      game_id: 1, players: [
        { "user_id": 1, score: 1 },
        { "user_id": 1, score: 1 }
      ]
    }
  }

  const matchCancel = () => {
    match.value.isStarted = false
    match.value.isChallenged = false
    match.value.isSearching = false
  }

  const matchReset = () => {
    match.value.isRanked = match.value.isChallenged = match.value.isStarted = match.value.isRefused = match.value.isOver = false
    console.log(match.value.isChallenged)
    match.value.match = {
      game_id: 1, players: [
        { "user_id": 1, score: 1 },
        { "user_id": 1, score: 1 }
      ]
    }
  }

  const matchEnd = (players: Array<Player>) => {
    match.value.isOver = true
    if (match.value.isStarted == false)
      matchStart()
    match.value.match.players = players
  }

  const sendChallenge = (ranked = false) => {
    match.value.isChallenged = true
    if (ranked)
      match.value.isChallenged = ranked
  }

  const refuseChallenge = () => {
    match.value.isChallenged = false
    matchRefused()
  }



  return {
    profile,
    showUserProfile,
    closeProfile,

    match,
    setMatchGame,
    setMatchOpponent,
    getMatchOpponents,
    matchRefused,
    matchCancel,
    matchSearch,
    matchStart,
    matchReset,
    matchEnd,
    sendChallenge,
    refuseChallenge
  }
}