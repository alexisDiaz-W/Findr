import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Tab1');

  return (
    <div>
      <button onClick={() => setActiveTab('Tab1')}>Tab 1</button>
      <button onClick={() => setActiveTab('Tab2')}>Tab 2</button>

      {activeTab === 'Tab1' && <div><p>Content of Tab 1</p></div>}
      {activeTab === 'Tab2' && <div><p>Content of Tab 2</p></div>}
    </div>
  );
}

export default Tabs;
