function TestRidePreview({testRideInput}){
    return (
        <div className="preview">
            {
                (
                    testRideInput.color === 'Color' &&
                    testRideInput.model === 'Model' &&
                    testRideInput.dateTime === "" &&
                    testRideInput.name === "" &&
                    testRideInput.email === ""
                ) || 
                <ul id="preview-list">
                    <li>
                        <article>
                            <p>Color: {testRideInput.color}</p>
                            <p>Model: {testRideInput.model}</p>
                            <p>For: {testRideInput.name}</p>
                            <p>Contact: {testRideInput.email}</p>
                            
                        </article>
                        <div>
                        
                        </div>
                    </li>
                </ul>
            } 
        </div>
    );
}

export default TestRidePreview;
