import {useState} from 'react';

const colors = ["Color", "Red", "Blue", "Green", "Yellow"];
const model = ["Model", "Ducati Panigale V4", "BMW HP4 Race", "Kawasaki Ninja H2R", 
               "MV Agusta F4 CC", "Harley-Davidson CVO Limited", "Confederate FA-13 Combat Bomber"];

function TestRideForm({bookTestRide}){
  const [color, setColor] = useState('Color');
  const [model, setModel] = useState('Model');
  const [dateTime, setDateTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    if (color === 'Color' || model === 'Model' || !dateTime || !name || !email) return;

    const data = {color, model, dateTime, name, email};

    bookTestRide(data);

    setColor("Color");
    setModel("Model");
    setDateTime("");
    setName("");
    setEmail("");
  }
  
  return (
    <main id="content">
      <div className="form-container">
        <form className="test-ride-form" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="colors">Choose a color:</label>
            <select id="colors" value={color} onChange={(e) => setColor(e.target.value)}>
              {colors.map( (col, ind) => <option key={ind} value={col} disabled={ind === 0}>{col}</option> )}
            </select>             
          </div>
          <div>
            <label htmlFor="models">Choose a Model:</label>
            <select id="models" value={model} onChange={(e) => setModel(e.target.value)}>
              {models.map( (mod, ind) => <option key={ind} value={mod} disabled={ind === 0}>{mod}</option> )}
            </select>
          </div>
          <div>
            <label for="datetime">Choose a date and time:</label>
            <input type="datetime-local" id="datetime" name="datetime" />
          </div>
          <div>
            <label for="full-name">Your Name</label>
            <input
              type="text" id="full-name" placeholder="Full Name" name="full-name"/>
          </div>
          <div>
            <label for="emai;">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
        </form>
        <button id="test-ride-btn"></button>
    </div>
  </main>
    );

}

export default TestRideForm;
