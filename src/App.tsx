import { useState, useEffect } from 'react';

interface SprintData {
  name: string;
  start: string;
  end: string;
}

interface Data {
  team: string[];
  sprint: SprintData | null;
}

const STORAGE_KEY = 'sprintingData';

const App = () => {
  const [team, setTeam] = useState([] as string[]);
  const [sprint, setSprint] = useState(null as SprintData | null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data: Data = JSON.parse(stored);
        setTeam(data.team || []);
        setSprint(data.sprint || null);
      } catch (err) {
        console.error('Failed to parse stored data', err);
      }
    }
  }, []);

  useEffect(() => {
    const data: Data = { team, sprint };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [team, sprint]);

  const addMember = () => {
    const name = prompt('Team member name:');
    if (name) {
      setTeam([...team, name]);
    }
  };

  const configureSprint = () => {
    const name = prompt('Sprint name:');
    if (!name) return;
    const start = prompt('Start date (YYYY-MM-DD):');
    if (!start) return;
    const end = prompt('End date (YYYY-MM-DD):');
    if (!end) return;
    setSprint({ name, start, end });
  };

  return (
    <div>
      <header>
        <h1>Sprint Kickoff</h1>
      </header>

      <section>
        <h2>
          My Team <button onClick={addMember}>+</button>
        </h2>
        <ul>
          {team.map((member, idx) => (
            <li key={idx}>{member}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>
          This Sprint <button onClick={configureSprint}>+</button>
        </h2>
        <div>
          {sprint && (
            <p>
              {`${sprint.name} (${sprint.start} - ${sprint.end})`}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
