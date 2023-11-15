
export function fetchData() {
  
  const ws = new WebSocket('ws://localhost:8280/tcp/match');

  ws.onopen = ()=>{
      const loginPacket = { head:'token', body:{ token : "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRmxvcmVudCBCYXJpcyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKczY3WGlLMkpxS2NKZWpIUWRQeml1VUlKY0J4UVk1Q3VHcUNLLWsyeFZidz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS96ZW1waWUtZGV2IiwiYXVkIjoiemVtcGllLWRldiIsImF1dGhfdGltZSI6MTY5NzQ0MTM5NywidXNlcl9pZCI6InJ5S1I5VDZWNWpnMUlraUpvTjI1ZWNlQUdERjIiLCJzdWIiOiJyeUtSOVQ2VjVqZzFJa2lKb04yNWVjZUFHREYyIiwiaWF0IjoxNjk3NDQxMzk3LCJleHAiOjE2OTc0NDQ5OTcsImVtYWlsIjoiYmFyaXMuZmxvcmVudEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwMjQxNjQ4NDQ4MjI4Njg0MzgzNyJdLCJlbWFpbCI6WyJiYXJpcy5mbG9yZW50QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.US-AMq7vZKiPMBGW2RoEdTKdZIE7yd-og9_FYh4IQYVu1uMiT0TzBOspMQmgC6N_1-8ezOogT4obozyoGJ-kCbsm16PZfakBlNiPb4E3LGcrbpwUi_7vAfWxxgrvkTrRZgkwugZhnQ7YoCWyAuyg5xpWjn3s98F02ORVCoOSSyBnsLDAAPqBOuUL_sbG3BmTlBet4oWWR4_Rx4Rhd-tejNmaVblrxLXaiir4s1myO8rOsu1nSvQKS2Gn4x9EKIEWG2yif5r00hIvwE5nmEsWWBRYRbc5YRrCwlAyJ8S0rh6EAp-_5ROMQHVPPgPBTP20LNzZNdHXBgi8qDPthdDqGA"} };
      ws.send(JSON.stringify(loginPacket));
  }
  ws.onmessage = (msg)=>{
    const packet = JSON.parse(msg.data);
    console.log(packet);
    
    switch(packet.head) {
      case 'auth_ok':
        const body = {game_type:0};
        ws.send(JSON.stringify({head:'waiting_room_enter', body}));
        break;
    }
  }
}