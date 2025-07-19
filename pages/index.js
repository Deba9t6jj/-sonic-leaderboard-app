import Leaderboard from '../components/Leaderboard';

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Sonic-Kaito Yapper Leaderboard</h1>
      <Leaderboard />
    </div>
  );
}
