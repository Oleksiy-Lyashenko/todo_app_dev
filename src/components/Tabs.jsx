export default function Tabs({ activeTab, setActiveTab}) {

  const setTab = (event) => {
    setActiveTab(event.target.name);
  };

  return (
    <div className="tab">
      <button
        className={activeTab === 'all' ? 'tab__title tab__title--active' : 'tab__title'}
        name="all"
        onClick={setTab}>
        All
      </button>
      <button
        className={activeTab === 'active' ? 'tab__title tab__title--active' : 'tab__title'}
        name="active"
        onClick={setTab}>
        Active
      </button>
      <button
        className={activeTab === 'completed' ? 'tab__title tab__title--active' : 'tab__title'}
        name="completed"
        onClick={setTab}>
        Completed
      </button>
    </div>
  );
}
