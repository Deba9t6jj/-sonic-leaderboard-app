const dummyYappers = [
  { rank: 1, name: 'YapperOne', mindShare: 1500 },
  { rank: 2, name: 'YapperTwo', mindShare: 1400 },
  { rank: 3, name: 'YapperThree', mindShare: 1300 },
  { rank: 4, name: 'YapperFour', mindShare: 1200 },
  { rank: 5, name: 'YapperFive', mindShare: 1100 }
];

export default function Leaderboard() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: '#0070f3', color: 'white' }}>
        <tr>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>Rank</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>Yapper Name</th>
          <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mind Share</th>
        </tr>
      </thead>
      <tbody>
        {dummyYappers.map(({ rank, name, mindShare }) => (
          <tr key={rank} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '8px' }}>{rank}</td>
            <td style={{ padding: '8px' }}>{name}</td>
            <td style={{ padding: '8px' }}>{mindShare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
