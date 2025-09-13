import {useState} from 'react';

const colors = ["Color", "Red", "Blue", "Green", "Yellow"];
const model = ["Model", "Ducati Panigale V4", "BMW HP4 Race", "Kawasaki Ninja H2R", 
               "MV Agusta F4 CC", "Harley-Davidson CVO Limited", "Confederate FA-13 Combat Bomber"];

function TestRideForm(){
  const [color, setColor] = useState('Color');
  const [model, setModel] = useState('Model');
  const [dateTime, setDateTime] = useState("");
  
    return (
        <main id="content">
            <div className="form-container">
                <form className="test-ride-form">
                    <div>
                        <label for="colors">Choose a color:</label>
                        <select id="colors" name="colors">
                            <option value="" disabled selected>Color</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Yellow">Yellow</option>
                        </select>
                      </div>
          <div>
            <label for="motorcycles">Choose a Model:</label>
            <select id="motorcycles" name="motorcycles">
              <option value="" disabled selected>Model</option>
              <option value="Ducati Panigale V4">Ducati Panigale V4</option>
              <option value="BMW HP4 Race">BMW HP4 Race</option>
              <option value="Kawasaki Ninja H2R">Kawasaki Ninja H2R</option>
              <option value="MV Agusta F4 CC">MV Agusta F4 CC</option>
              <option value="Harley-Davidson CVO Limited">Harley-Davidson CVO Limited</option>
              <option value="Confederate FA-13 Combat Bomber">Confederate FA-13 Combat Bomber</option>
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
