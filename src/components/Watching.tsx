import { useState } from 'react';
import Watches from './Watches';
import Form from './Form';
import { IWatchType } from '../common/types';

export default function Watching() {
  const [watches, setWatches] = useState<IWatchType[]>([
    { id: crypto.randomUUID(), name: 'Москва', timezone: 3 },
  ]);

  const deleteWatch = (id: string) => setWatches(watches.filter(w => w.id !== id));

  const addWatch = (name: string, timezone: number) => {
    setWatches([...watches, { id: crypto.randomUUID(), name, timezone }]);
  };


  return (
    <div className="container">
      <Form addWatch={addWatch} />
      <div className="watches">
        {watches.map(w => <Watches key={w.id} data={w} onClose={deleteWatch}/>)}
      </div>
    </div>
  );
}

