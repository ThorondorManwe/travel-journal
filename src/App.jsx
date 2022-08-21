import React from "react";
import Navbar from './components/Navbar';
import Card from "./components/Card";
import data from "./data";
import reactLogo from './assets/react.svg'


function App() {

  const cards = data.map(item => {
    return(
      <Card
          key={item.id}
          title={item.title}
          location={item.location}
          googleMapsUrl={item.googleMapsUrl}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
          imageUrl={item.imageUrl}
      />
    )
  });

  return (
    <div className="App">
      
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>     
      
    </div>
  )
}

export default App
