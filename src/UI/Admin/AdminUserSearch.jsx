import { useState, useEffect } from 'react';

function AdminUserSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [boolean, setBoolean] = useState(true);
    console.log(boolean);
  
    return (
        <div className="flex flex-col gap-2 self-start">
        <div className="flex gap-5 font-bold">
            <button className='hover:text-green hover:underline hover:underline-offset-2' onClick={() => setBoolean((boolean) => !boolean)}>Household</button>
            <button className='hover:text-green hover:underline hover:underline-offset-2'>Collector</button>
        </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          className="border-2 mb-3 p-2 border-black h-8 placeholder:font-body"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>
    );
  }

export default AdminUserSearch;